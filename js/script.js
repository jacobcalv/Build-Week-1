var i = 0;
var images = [];
var time = 5000;

images[0] = 'img/slide1.jpg';
images[1] = 'img/slide2.jpg';
images[2] = 'img/slide3.jpg';
images[3] = 'img/slide4.jpg';
images[4] = 'img/slide5.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;

function myFunc() {
    document.getElementById("motto").innerHTML = "My Life";
  }
