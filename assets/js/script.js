
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).scroll( function(e){
const y = $("html").scrollTop();
if(y > 300) $("nav").addClass("fondonav")
else $("nav").removeClass("fondonav")
})
