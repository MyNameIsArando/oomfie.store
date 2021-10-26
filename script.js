function togglePlay() {
    var myAudio = document.getElementById("audio");
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};
$('.cover').click(function() {
    $(".cover").slideToggle("fast");
    $(".container").slideToggle("fast");
});
var description = [
    "img/bone/1.png",
    "img/bone/2.jpg",
    "img/bone/3.png",
    "img/bone/4.png",
    "img/bone/5.jpg",
    "img/bone/6.png",
    "img/bone/7.png",
    "img/bone/8.png",
    "img/bone/9.png",
    "img/bone/10.jpg",
    "img/bone/11.png",
    "img/bone/12.jpg",
    "img/bone/13.png",
    "img/bone/14.png",
    "img/bone/15.png"
  ];
  
  var size = description.length
  var x = Math.floor(size*Math.random())
  document.getElementById('avi').src=description[x];
document.getElementById('audio').volume = 0.05; 