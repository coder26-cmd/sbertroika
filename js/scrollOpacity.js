$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.person').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return (elementHeight - scrollTop*3) / elementHeight ;
      }
    });
});