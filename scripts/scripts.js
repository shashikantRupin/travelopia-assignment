
var labelID;

$('label').click(function() {
  labelID = $(this).attr('for');
  $('#' + labelID).toggleClass('active');
}); 

