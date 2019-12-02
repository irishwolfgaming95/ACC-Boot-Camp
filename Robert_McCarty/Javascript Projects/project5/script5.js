var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
var index = 0;
document.getElementsByClassName('imgsrc').src = images[index];

var next = document.getElementById('slider-next');
var previous = document.getElementById('slider-previous');



function nextImage() {
    index+=1;
    if (index > images.length - 1) {
     index = 0;
    }
    

     document.getElementById('imgsrc').src = images[index];
}
//'Previous' button


function previousImage(){
    index-=1;
    if (index < 0) {
     index = images.length - 1;
    }
   

     document.getElementById('imgsrc').src = images[index];

}