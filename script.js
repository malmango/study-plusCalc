$(function(){
  $('.ex4 button').click(function(){
    var btnNum = $(this).html()
    $(`.ex4 div`).css({'background':'none'})
    $(`.ex4 .box${btnNum}`).css({'background':'red'})
  })
})

$(function(){
  function fnSum(evt, target){
    evt.preventDefault()
    var dataNum = target.attr('data-n')
    var num1 = parseInt($(`.ex5 .ex5-${dataNum} p .num1`).val())
    var num2 = parseInt($(`.ex5 .ex5-${dataNum} p .num2`).val())
    var result = num1 + num2
    $(`.ex5 .ex5-${dataNum} .result`).val(result)
  }

  $('.ex5 form').submit(function(e){
    fnSum(e, $(this))
  })
})