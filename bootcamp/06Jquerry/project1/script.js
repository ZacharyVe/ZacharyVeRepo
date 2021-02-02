// var myCanvas = $("#myCanvas");
// var myCanvasContext = myCanvas[0].getContext("2d");

window.onload= function() {
  Particles.init({
    selector: '.background'
  });
};

// var particles = Particles.init({
// 	selector: '.background',
//   color: '#DA0463'
// });

$('.parallax-window').parallax({imageSrc: '1.jpg'});
$('.parallax-window').parallax({imageSrc: '2.jpg'});

$(document).ready(function(){
  console.log('document loaded');
});
