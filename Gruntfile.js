module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'src/sass',
          cssDir: 'deploy/style/css',
          environment: 'production'
        },
      },
    },
    jade: {
      dist: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "deploy/index.html": "src/jade/index.jade"
        },
      }
    },
    coffee: {
      dist: {
        expand: true,
        flatten: true,
        cwd: 'src/coffeescript',
        src: ['*.coffee'],
        dest: 'deploy/script/js',
        ext: '.js'
      }
    },
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // 默认被执行的任务列表。
  grunt.registerTask('default', [
    'compass',
    'jade',
    'coffee'
  ]);

};

/*HTML去掉注析、换行符 - HtmlMin
CSS文件压缩合并 – CssMinify
JS代码风格检查 – JsHint
JS代码压缩 – Uglyfy
image压缩 - imagemin*/