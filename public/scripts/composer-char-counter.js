
$(document).ready(function(){
  var maxlen = 140;

  $("textarea").keyup(function(e){

    var txtLen = $(this).val().length;
    var remain = maxlen - txtLen;

    $("span.counter").text(remain);

    if(remain < 0) {
      $("span.counter").css('color', 'red');
    } else {
      $("span.counter").css('color', 'black');
    }

  });

});