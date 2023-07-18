
let box1 = document.querySelector('.box1');
document.querySelector('.btn1').addEventListener('click', () => {
    box1.style.animationName = 'loader-border';
    setTimeout(() => {
        box1.style.animationName = 'none';
    }, 2750);
});

let box2 = document.querySelector('.box2');
document.querySelector('.btn2').addEventListener('click', () => {
    box2.style.borderColor = 'transparent transparent transparent #bd4601';
    box2.style.animationName = 'loader-rotation';
    setTimeout(() => {
        box2.style.animationName = 'none';
        box2.style.borderColor = 'transparent';
    }, 2750)
})
