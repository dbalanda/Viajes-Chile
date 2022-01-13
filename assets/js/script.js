
$(document).scroll( function(e){
const y = $("html").scrollTop();
if(y > 300) $("nav").addClass("fondonav")
else $("nav").removeClass("fondonav")
})
