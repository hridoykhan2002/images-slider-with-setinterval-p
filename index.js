// selecting elements 
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.img');
// array
const imgSrc = ["img/p (1).jpeg","img/p (2).jpeg","img/p (3).jpeg","img/p (4).jpeg","img/p (5).jpeg","img/p (6).jpeg","img/p (7).jpeg","img/p (8).jpeg","img/p (9).jpeg","img/p (10).jpeg","img/p (11).jpeg","img/p (12).jpeg","img/p (13).jpeg","img/p (14).jpeg","img/p (15).jpeg","img/p (16).jpeg","img/p (17).jpeg","img/p (18).jpeg","img/p (19).jpeg","img/p (20).jpeg"];
// let variable
let counter = 0;

setInterval(() =>{
    const random = Math.floor(Math.random()*20);
    img.src = "img/p ("+random+").jpeg"
},1000);

next.addEventListener('click', () =>{
    counter++;
    if(counter > 0){
        img.src = imgSrc[counter]
    }
    
});

prev.addEventListener('click', () =>{
    counter--;
    if(counter <0){
        img.src = imgSrc.length -1;
    }
});