document.addEventListener('DOMContentLoaded', function() {
  var carousel = new bootstrap.Carousel('#carrosel-coffee', {
    interval: 5000,
    ride: 'carousel',
    pause: 'hover',
    wrap: true
  });
});
