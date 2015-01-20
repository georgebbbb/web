module.exports = function(grunt) {
  // Project configuration.
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
      dist2: {                  // Target
        options: {  
          outputStyle: 'expanded',           // Target options
          sassDir: 'src/sass',
          cssDir: 'build/css',
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
          "build/choice.html": "src/jade/choice3.jade",
          "build/response.html": "src/jade/response.jade",
          "build/fillblank.html": "src/jade/fillblank.jade"
        },
      },
    },
    coffee: {
      dist2: {
        expand: true,
        flatten: true,
        cwd: 'src/coffee',
        src: ['*.coffee'],
        dest: 'build/js',
        ext: '.js'
      },
    },
    copy: { 
      img2: {
        files: [{
          expand: true,                  
          cwd: 'src/image',                   
          src: '*.*',   
          dest: 'build/image',
        }] 
      },
      jslib: {
        files: [{
          expand: true,                  
          cwd: 'src/jslib',                   
          src: '*.*',   
          dest: 'build/js',
        }] 
      },
    },
    watch: {
      options: {
        livereload: lrPort
      },
      html: {
        files: ['src/jade/**.jade','src/jade/module/**.jade'],
        tasks: ['jade'],
      },
      js: {
        files: ['src/coffee/*.coffee'],
        tasks: ['coffee'],
      },
      css: {
        files: ['src/sass/*.sass'],
        tasks: ['compass'],
      },
    },
    //clean清除
    clean: {
      options: {

      },
      clean: [
        'build/*'
      ]
    },
    //uglify压缩js
    uglify: { 
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      js2min: {
        expand: true,        // 启用下面的选项
        cwd: 'build/js',    // 指定待压缩的文件路径
        src: ['*.js', '!*.min.js'],    // 匹配相对于cwd目录下的所有css文件(排除.min.css文件)
        dest: 'deploy/js',    // 生成的压缩文件存放的路径
        ext: '.js'        // 生成的文件都使用.min.css替换原有扩展名，生成文件存放于dest指定的目录中
      }
    },
    //html压缩
    htmlmin: {
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      html2min: {
        expand: true,        
        cwd: 'build/',    
        src: ['*.html'],    
        dest: 'deploy/',    
        ext: '.html'
      }
    },
    //image压缩
    imagemin: {
      options: {
        optimizationLevel: 3 //定义 PNG 图片优化水平
      },
      webImg2min: {
        files: [{
          expand: true,                  
          cwd: 'build/image',                   
          src: ['*.{png,jpg,gif}'],   
          dest: 'deploy/image'
        }]                  
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['*.css', '!*.min.css'],
          dest: 'deploy/css',
          ext: '.css'
        }]
      }
    },
  });

  // 加载任务的插件。
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  // 默认被执行的任务列表。
  grunt.registerTask('default', [
    'clean',
    'copy',
    'compass',
    'jade',
    'coffee',
    'connect',
    'watch'
  ]);
  grunt.registerTask('min', [
    'uglify',
    'htmlmin',
    'cssmin',
    'imagemin'
  ]);

};
