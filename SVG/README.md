SVG
===
XML描述的矢量文件

[W3C标准](http://www.w3.org/TR/SVG11/)

[浏览器支持情况](http://caniuse.com/#cats=SVG)

    <!--  XML 声明 -->
    <?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
    "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

    <svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">

    <circle cx="100" cy="50" r="40" stroke="black"
    stroke-width="2" fill="red"/>

    </svg>

HTML 页面中的 SVG
---

    <!-- embed -->
    <embed src="rect.svg" width="300" height="100" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />
    <!-- object -->
    <object data="rect.svg" width="300" height="100" 
    type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
    <!-- iframe -->
    <iframe src="rect.svg" width="300" height="100"></iframe>

SVG 形状
---

    矩形 <rect>
      坐标
        x
        y
      长宽  
        width
        height
      圆角
        rx
        ry
    圆形 <circle>
      坐标
        cx
        cy
      半径
        r
    椭圆 <ellipse>
      坐标
        cx
        cy
      半径
        rx
        ry
    线 <line>
      点
        x1
        y1

        x2
        y2
    折线 <polyline>
      points = "x1 y1 x2 y2 x3 y3 x4 y4"
    多边形 <polygon>
    路径 <path>

属性
---

    fill = #fff    //内部颜色
    stroke = #fff  //描边
    stroke-width = 10 //边的宽度
    transform = "rotate(30)"  //变形