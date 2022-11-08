const color = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

 
  let timerId = null;

  const on =()=>{timerId = setInterval(() => {
  color.style.background = getRandomHexColor();
},1000);
btnStart.disabled = true;

  }

  btnStart.addEventListener('click', on );

  btnStop.addEventListener('click', () => {
    btnStart.disabled = false; 
    clearInterval(timerId);
  });