const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId;

const onChangeThemeClick = () => {
    startBtnEl.setAttribute('disabled', 'true')
    stopBtnEl.removeAttribute('disabled')
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);

}

startBtnEl.addEventListener('click', onChangeThemeClick);

stopBtnEl.addEventListener('click', () => {
    startBtnEl.removeAttribute('disabled')
    stopBtnEl.setAttribute('disabled', 'true')
    clearInterval(timerId);
})
