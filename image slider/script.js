
const slides = document.querySelectorAll('.slide img');
let slideIndex = 0;
let interValid = null;

document.addEventListener('DOMContentLoaded',initialSlide);

function initialSlide(){
    if(slides.length>0){
        slides[slideIndex].classList.add('displaySlide');
    interValid = setInterval(nextSlise,5000);
    }
    
}
function showSlide(index){
    if(index>=slides.length){
        slideIndex = 0;
    }
    else if(index <0){
        slideIndex = slides.length-1;
    }
slides.forEach(slide => {
    slide.classList.remove('displaySlide');
});
slides[slideIndex].classList.add('displaySlide');
}
function prevSlide(){
    clearInterval(interValid);
    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}