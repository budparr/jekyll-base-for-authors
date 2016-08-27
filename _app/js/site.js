/* global sticky Waypoint:true*/
/* eslint-env jquery */
// var sticky = new Waypoint.Sticky({
//   element: $('.chapter')[0]
// });


$.each(['chapter', 'np-right'], function(i, classname) {
  var $elements = $('.' + classname)

  $elements.each(function() {
    new Waypoint({
      element: this,
      handler: function(direction) {
        var previousWaypoint = this.previous()
        var nextWaypoint = this.next()

        $elements.removeClass('np-previous np-current np-next')
        $(this.element).addClass('np-current')
        if (previousWaypoint) {
          $(previousWaypoint.element).addClass('np-previous')
        }
        if (nextWaypoint) {
          $(nextWaypoint.element).addClass('np-next')
        }
      },
      offset: '10%',
      group: classname
    })
  })
})
