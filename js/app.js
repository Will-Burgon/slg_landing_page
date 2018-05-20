let prev = document.querySelector('.carousel__slider__control--prev');
let next = document.querySelector('.carousel__slider__control--next');

let slider = document.querySelectorAll('.carousel__slider__image');
let indicator = document.querySelectorAll('#carousel__slider__indicator__circle');
console.log(indicator)
let currentSlide = 0;

TweenMax.set(slider.item(currentSlide), {className: '+=visible'});
TweenMax.set(indicator.item(currentSlide), {fill: '#00ff9c'})

function clickNext(){
   TweenMax.to(slider.item(currentSlide), 1, {autoAlpha: 0});
   TweenMax.set(indicator.item(currentSlide), {fill: '#faf9f9'});

   if(currentSlide < slider.length - 1) {
       currentSlide++
   }else {currentSlide = 0}

   TweenMax.to(slider.item(currentSlide), 1, {autoAlpha: 1})
   TweenMax.set(indicator.item(currentSlide), {fill: '#00ff9c'})

}

function clickPrev(){
    TweenMax.to(slider.item(currentSlide), 1, {autoAlpha: 0});
    TweenMax.set(indicator.item(currentSlide), {fill: '#faf9f9'});
    if(currentSlide>0 && currentSlide<=2){
        currentSlide--
    } else{currentSlide=2}
    TweenMax.to(slider.item(currentSlide), 1, {autoAlpha: 1})
    TweenMax.set(indicator.item(currentSlide), {fill: '#00ff9c'})

}

next.addEventListener('click', clickNext)

prev.addEventListener('click', clickPrev)


