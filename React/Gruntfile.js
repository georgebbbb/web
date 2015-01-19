module.exports = function(grunt) {

  // LiveReload的默认端口号，你也可以改成你想要的端口号
  var lrPort = 35728;
  // 使用connect-livereload模块，生成一个与LiveReload脚本
  // <script src="http://127.0.0.1:35729/livereload.js?snipver=1" type="text/javascript"></script>
  var lrSnippet = require('connect-livereload')({ port: lrPort });
  // 使用 middleware(中间件)，就必须关闭 LiveReload 的浏览器插件
  var lrMiddleware = function(connect, options) {
      return [
          // 把脚本，注入到静态文件中
          lrSnippet,
          // 静态文件服务器的路径
          connect.static(options.base),
          // 启用目录浏览(相当于IIS中的目录浏览)
          connect.directory(options.base)
      ];
  };

  // 项目配置(任务配置)
  grunt.initConfig({
    // 读取我们的项目配置并存储到pkg属性中
    pkg: grunt.file.readJSON('package.json'),
    // 通过connect任务，创建一个静态服务器
    connect: {
        options: {
            // 服务器端口号
            port: 8001,
            // 服务器地址(可以使用主机名localhost，也能使用IP)
            hostname: 'localhost',
            // 物理路径(默认为. 即根目录) 注：使用'.'或'..'为路径的时，可能会返回403 Forbidden. 此时将该值改为相对路径 如：/grunt/reloard。
            base: '.'
        },
        livereload: {
            options: {
                // 通过LiveReload脚本，让页面重新加载。
                middleware: lrMiddleware
            }
        }
    },
    compass: {
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'src/sass',
          cssDir: 'build/style/css',
          environment: 'production'
        },
      },
    },
    jade: {
      dist: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          "build/timer.html": "src/jade/timer.jade",
          "build/datatransmission.html": "src/jade/datatransmission.jade"
        },
      }
    },
    coffee: {
      dist: {
        expand: true,
        flatten: true,
        cwd: 'src/coffee',
        src: ['*.coffee'],
        dest: 'build/js',
        ext: '.js'
      },
    },
    watch: {
      options: {
        livereload: lrPort
      },
      css: {
        files: ['src/**/*.*'],
        tasks: ['default'],
      },
    },
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // 默认被执行的任务列表。
  grunt.registerTask('default', [
    'compass',
    'jade',
    'coffee'
  ]);
  grunt.registerTask('wat', [
    'compass',
    'jade',
    'coffee',
    'connect',
    'watch'
  ]);

};

/*HTML去掉注析、换行符 - HtmlMin
CSS文件压缩合并 – CssMinify
JS代码风格检查 – JsHint
JS代码压缩 – Uglyfy
image压缩 - imagemin*/
