$ ->
  $('.row_stem_img').each -> 
    imgWidth = $(this).width()
    docWidth = $(window).width()-40
    if imgWidth > docWidth
      $(this).css 'width',docWidth
  #答案的图片排列自适应
  $('.options li').has('img').css('float','left')

  #图片处理
  $('.richtext img').click ->
    src = $(this).attr('src')
    #console.log src
    html = ''
    html += '<div class="poplgimg">'
    html += '<div class="popimg"></div>'
    html += '<div class="lgimg"><img src="'
    html += src
    html += '"></div><div class="poplgx"></div></div>'

    $('body').prepend(html)
    $('.popimg').css('height', $(document).height())
    $('.lgimg img').css({
      'width' : $(window).width()-10
    })
    $('.lgimg').css({
      'top' : ($(window).height() - $(this).height())/2
    })

    $('.poplgx').on 'click', (e)->
      $('.poplgimg').remove()

    target = $('.lgimg img')
    target.css 
      '-webkit-transition': 'all ease 0.05s'
    touch.on target, 'touchstart', (e)->
      e.preventDefault()
    size = 1
    width = target.width()
    height = target.height()
    touch.on target, 'tap', (e)->
      if size > 1
        size -= 0.5
        $(this).css
          'width': $(this).width()/1.5,
          'height': $(this).height()/1.5 
    touch.on target, 'doubletap', (e)->
      if size <= 4
        size += 0.5
        $(this).css
          'width': $(this).width()*1.5,
          'height': $(this).height()*1.5
    touch.on target, 'drag', (e)->
      dx = dx || 0
      dy = dy || 0
      offx = dx + e.x + "px"
      offy = dy + e.y + "px"
    $(this).css
      'transform' : 'translate3d('+offx+','+offy+',0)',
      'transform' : 'translate3d('+offx+','+offy+',0)',
      '-ms-transform' : 'translate3d('+offx+','+offy+',0)',
      '-moz-transform' : 'translate3d('+offx+','+offy+',0)', 
      '-webkit-transform' : 'translate3d('+offx+','+offy+',0)', 
      '-o-transform' : 'translate3d('+offx+','+offy+',0)'
     
    return
  return