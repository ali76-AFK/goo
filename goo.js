// var roll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60)};

let p1 = document.querySelector('.point1');
let p2 = document.querySelector('.point2');
let p3 = document.querySelector('.point3');
let p4 = document.querySelector('.point4');
let p5 = document.querySelector('.point5');
let like = document.querySelector('.like');
let diss = document.querySelector('.diss');
let i =300, p=0;



// like.addEventListener('click', function(){
for(i=0;i<300;i++){
    setTimeout(function() {
    p1.style.top = `${i}rem`;
    p1.style.right = `${i}rem`;
    p2.style.top = `${i}rem`;
    p2.style.right = `${i+4}rem`;
    p3.style.top = `${i}rem`;
    p3.style.right = `${i+6}rem`;
    p4.style.top = `${i}rem`;
    p4.style.right = `${i+8}rem`;
    p5.style.top = `${i}rem`;
    p5.style.right = `${i+12}rem`;

    }, 1000);
}
// });

   
// diss.addEventListener('click', function(){
// for(i=0;i>0;i--){
    setTimeout(function() {
        p1.style.top = `${i/5}rem`;
        p1.style.right = `${i/2}rem`;
        p2.style.top = `${i/5}rem`;
        p2.style.right = `${i/4}rem`;
        p3.style.top = `${i/5}rem`;
        p3.style.right = `${i/6}rem`;
        p4.style.top = `${i/5}rem`;
        p4.style.right = `${i/8}rem`;
        p5.style.top = `${i/5}rem`;
        p5.style.right = `${i/12}rem`;
    }, 1000);
// }
// });












function rering(i){
    p1.style.top= i;
    p1.style.left= i;
    p2.style.top= i/3;
    p2.style.left= i/3;
    p3.style.top= i+70;
    p3.style.left= i+70;
    p4.style.top= i/5;
    p4.style.left= i/5;
}


// p1.addEventListener('mouseover', function() {
    

// });


