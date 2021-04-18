const slides=document.querySelector(".slideimages").children;
const slidestext=document.querySelector(".secondbox").children;
const prev=document.querySelector(".left");
const next=document.querySelector(".right");
let index=0;

prev.addEventListener("click",function(){
    prevSlide();
    resetTime();
});
next.addEventListener("click",function(){
    nextSlide();
    resetTime();
});

function prevSlide(){
    if(index==0){
        index=slides.length-1
    }else{
        index--
    }
    changeSlide();
};
function nextSlide(){
    if(index==slides.length-1){
        index=0
    }else{
        index++
    }
    changeSlide();
};

function changeSlide(){
    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
        slidestext[i].classList.remove("active")
    }
    slides[index].classList.add("active");
    slidestext[index].classList.add("active")
};

function resetTime(){
    clearInterval(timer);
    timer=setInterval(autoplay,3000);
};

function autoplay(){
    nextSlide();
}
let timer=setInterval(autoplay,3500)