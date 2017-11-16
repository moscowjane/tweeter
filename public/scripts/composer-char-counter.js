
$(document).ready(function(){
 var maxlen = 140;

 $("textarea").keyup(function(e){

  // Finding total characters in Textarea
  var txtLen = $(this).val().length;



   var remain = maxlen - txtLen;
  // Updating remaining character count
  $("span.counter").text(remain);

  if(remain < 0) {
    $("span.counter").css('color', 'red')
  } else {
    $("span.counter").css('color', 'black')
  }

 });

 // $("#txt_tweet").keydown(function(e){
 //  var keycode = e.keyCode;

 //  // Finding total characters in Textarea
 //  var txtLen = $(this).val().length;

 //  if(txtLen > maxlen){

 //   // when keycode is not of backspace
 //   if(keycode != 8){
 //     // Stopping new character to enter
 //     // e.preventDefault();
 //     return false;
 //   }
 //  }
 });