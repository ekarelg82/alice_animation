 $(window).load(function() {
   skrollr.init({
     forceHeight: false
   });

   var beingRead = function() {
     var $screenHeight = $.waypoints('viewportHeight');
     var $pageHeight = $(".page").height();
     var offset = ($pageHeight - $screenHeight) / 2 * -1;

     return offset;
   }

   $(".page").waypoint(function(direction) {
     var mood = $(this).data("mood");
     $("body").removeClass().addClass(mood);
     if (direction === "up") {
       $(this).addClass("in-view").removeClass("scrolled-past")
         .waypoint('next').removeClass("in-view");
     } else {
       $(this).addClass("in-view").removeClass("scrolled-past")
         .waypoint('prev').removeClass("in-view").addClass("scrolled-past");
     }
   }, {
     offset: beingRead()
   });
 });
