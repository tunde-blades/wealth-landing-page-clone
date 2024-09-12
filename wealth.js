


let slides = document.querySelector(`.slides`);
let slide = document.querySelectorAll(`.slide`);
let context = document.querySelector(`.context`);
let image = document.querySelector(`img`);
let firstSlider = document.querySelector(`#firstslider`);
let list = document.querySelector(`.list`);
let slide2 = document.querySelectorAll(`.slidelist`);
let index = 1;
let i = 1;
let btn = document.querySelectorAll(`#icon1`);
let nextbtn = document.querySelector(`#nxt`);
let previousbtn = document.querySelector(`#prv`);
let slideArr = [slide[0],slide[1],slide[2],slide[3],slide[4],slide[5],slide[6],slide[7],slide[8],slide[9]];

let displayArr = [slide2[0],slide2[1],slide2[2],slide2[3],slide2[4],slide2[5],slide2[6],slide2[7],slide2[8],slide2[9]];


// context transition
slides.addEventListener(`onmouseover`, ()=>{
    context = document.querySelector(`.context`);
    image = document.querySelector(`img`);
    image.style.transition = `3s`;
});


// menu slider

// const firstclone= slide[0].cloneNode(true);
// const lastclone= slide[slide.length - 1].cloneNode(true);
// console.log(firstclone);


// firstclone.id = `firstclone`;
// lastclone.id = `lastclone`;

// slides.append(firstclone);
// slides.prepend(lastclone);

//  const slidewidth = slide[i].clientWidth;
//  slides.style.transform = `translate(${-slidewidth * i}px)`;

// const startSlide = () => {
//     setInterval(() => {
//         slides.style.transform = `translate(${-slidewidth * i}px)`;
//         slides.style.transition = `1s`;
//         i++;
//     }, 1000);
// };

// startSlide();

// slides.addEventListener('transitionend', () => {
//    slide = document.querySelectorAll(`.slide`);
//    slides = document.querySelector(`.slides`);
//    firstclone.id = `firstclone`;
// lastclone.id = `lastclone`;
//     if(slide[i].id === firstclone.id) {
//         i = 1;
//         slides.style.transition = `none`;
//         slides.style.transform = `translate(${-slidewidth * i}px)`;
//     }
//     else{
//         console.log(`hjhhshh`);
//     }

    
// });
//click slides

slides.addEventListener(`click`, () => {
    slide = document.querySelectorAll(`.slide`);
    slide2 = document.querySelectorAll(`.slidelist`);
    list = document.querySelector(`.list`);

        window.scroll({
            top: 700,
            behavior: `smooth`
        });

     slideArr = [slide[0],slide[1],slide[2],slide[3],slide[4],slide[5],slide[6],slide[7],slide[8],slide[9]];

     displayArr = [slide2[0],slide2[1],slide2[2],slide2[3],slide2[4],slide2[5],slide2[6],slide2[7],slide2[8],slide2[9]];

     if (slide[0]) {
        list.style.transition = `3s`;
        list.style.transform = `translate(${-210}vw)`;
     }
           



})






//mainlist slider

const firstclone2= slide2[0].cloneNode(true);
const lastclone2= slide2[slide2.length - 1].cloneNode(true);
console.log(firstclone2);


firstclone2.id = `firstclone2`;
lastclone2.id = `lastclone2`;

list.append(firstclone2);
list.prepend(lastclone2);

const slidewidth2 = slide2[index].clientWidth;
list.style.transform = `translate(${-slidewidth2 * index}px)`;

const startSlide2 = () => {
    setInterval(() => {
        list.style.transform = `translate(${-slidewidth2 * index}px)`;
        list.style.transition = `3s`;
        index++;
    }, 7000);
};
startSlide2();

list.addEventListener('transitionend', () => {
   slide2 = document.querySelectorAll(`.slidelist`);
   list = document.querySelector(`.list`);

    if(slide2[index].id === firstclone2.id) {
        index = 1;
        list.style.transition = `none`;
        list.style.transform = `translate(${-slidewidth2 * index}px)`;
    };

    console.log(`wwgggww`);
    
});


nextbtn.addEventListener('click', () => {
    slide2 = document.querySelectorAll(`.slidelist`);
    list = document.querySelector(`.list`);
    btn = document.querySelectorAll(`#icon1`);
    nextbtn = document.querySelector(`#nxt`);
    previousbtn = document.querySelector(`#prv`);
 
  
         console.log(2020);
         
         list.style.transition = `none`;
         list.style.transform = `translate(${-300}vw)`;

    //  else if(prvbtn) {
    //     list.style.transition = `none`;
    //     list.style.transform = `translate(${slidewidth2 * index}px)`;
    // };
 
    //  console.log(`wwgggww`);
     
 });

