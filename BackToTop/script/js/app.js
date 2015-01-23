require.config({
    // 默认从./script/js加载所有的module ID
    baseUrl: 'script/js',
    // 注意，paths config是相对于baseUrl的，
    paths: {
      'jquery': '../jslib/jquery',
      'backtotop': 'backtotop'
    },
    //shim : 配置依赖关系;
    shim : {  
      bootstrap : {  
        deps : [ 'jquery' ],  //依赖文件
        exports : 'bootstrap'  //向外调用名
      },
      smoove : {  
        deps : [ 'jquery' ],  //依赖文件
        exports : 'smoove'  //向外调用名
      } 
    }
});

require(['jquery','backtotop']);
