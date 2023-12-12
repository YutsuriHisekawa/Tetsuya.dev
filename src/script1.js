document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 74 || event.keyCode == 67)) || 
        (event.ctrlKey && event.keyCode == 85) || 
        event.keyCode == 123) {
        event.preventDefault();
    }
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

    document.addEventListener('DOMContentLoaded', function () {
        var parallaxContainer = document.querySelector('.parallax');
        var parallaxImage = parallaxContainer.querySelector('img');

        parallaxContainer.addEventListener('mousemove', function (e) {
            var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            var yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            parallaxImage.style.transform = 'rotateY(' + xAxis + 'deg) rotateX(' + yAxis + 'deg)';
        });

        parallaxContainer.addEventListener('mouseenter', function () {
            parallaxImage.style.transition = 'none';
        });

        parallaxContainer.addEventListener('mouseleave', function () {
            parallaxImage.style.transition = 'transform 0.3s ease';
            parallaxImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });

      document.addEventListener("mousemove", parallax);

  function parallax(event) {
    document.querySelectorAll(".parallax-wrap span").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }