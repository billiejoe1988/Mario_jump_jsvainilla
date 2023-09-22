const mario = document.querySelector('.mario');
const pipe1 = document.querySelector('.pipe1');

const jump = () => {
    mario.classList.add('jump');

    setTimeout (() => {
         mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval (() => {
   
   const pipe1Position = pipe1.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   
   if (pipe1Position <= 120 && pipe1Position > 0 && marioPosition < 80) {

        pipe1.style.animation ='none';
        pipe1.style.left = `${pipe1Position}px`;

        mario.style.animation ='none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width ='75px'
        mario.style.marginLeft ='50px'

        clearInterval (loop);
   }

}, 10);

document.addEventListener('keydown', jump);