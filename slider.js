
var images=3;
var temp=1;
var slider=document.getElementById('slider');
show('image1');
//will display the image with the id passed.
function show(id){
    hideAll();
    document.getElementById(id).style.display='block';
}
//will hide all the images
function hideAll(){
    for(id=1;id<=images;id++){
        document.getElementById('image'+id).style.display='none';
    }
}
//slide the image to next image
function slide(){
    show('image'+temp);
    if(temp<3){
        temp+=1;
    }
    else{
        temp=1;
    }
}
//move the slides according to passed value.
function move(value){
    if(value==1 && temp<3){
        temp+=value;
    }
    if(value==-1 && temp>1){
        temp+=value;
    }
    clearInterval(repeater)
    show('image'+temp);
    repeater=setInterval(slide,2000)
}
//used to slide the slider after every 2 seconds
var repeater=setInterval(slide,2000);
