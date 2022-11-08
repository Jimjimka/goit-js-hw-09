// import flatpickr from "flatpickr";
// import Notiflix from 'notiflix';
// import "flatpickr/dist/flatpickr.min.css";

// const datetimePickerEl = document.querySelector('#datetime-picker');
// const startBtnEl = document.querySelector('[data-start]');
// let rootSelector = document.querySelector('.timer')
// // startBtnEl.setAttribute('disabled', 'true')

// let deadLine;

// const options = {

//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//     minuteIncrement: 1,
  
//   onClose(selectedDates) {
//       console.log(selectedDates[0]);      
//       if (selectedDates[0] < Date.now()) {
//           Notiflix.Notify.failure("Please choose a date in the future");
//       } else if (selectedDates[0] > Date.now()) {
//           startBtnEl.disabled = false;
//       }
//       deadLine = selectedDates[0];
//   },
// };

// flatpickr(datetimePickerEl, options);


// startBtnEl.addEventListener('click', () => {
// timer.start()

// })


// const timer = {
//     intervalId: null,

//     start() {
//         this.intervalId = setInterval(() => {
//             const different = deadLine.getTime() - Date.now();
 

//             if (different <= 0) {
//                 this.stop()
//                 return;
//             }
            
//             const { days, hours, minutes, seconds } = this.convertMs(different);

//             rootSelector.querySelector('[data-days]').textContent = this.addLeadingZero(days);
//             rootSelector.querySelector('[data-hours]').textContent = this.addLeadingZero(hours);
//             rootSelector.querySelector('[data-minutes]').textContent = this.addLeadingZero(minutes);
//             rootSelector.querySelector('[data-seconds]').textContent = this.addLeadingZero(seconds);
//             startBtnEl.disabled = true; 

//         }, 1000)
        
//     },

   
//     stop() {
//         clearInterval(this.intervalId);
//     },

//     convertMs(ms) {
//         // Number of milliseconds per unit of time
//         const second = 1000;
//         const minute = second * 60;
//         const hour = minute * 60;
//         const day = hour * 24;

//         // Remaining days
//         const days = Math.floor(ms / day);
//         // Remaining hours
//         const hours = Math.floor((ms % day) / hour);
//         // Remaining minutes
//         const minutes = Math.floor(((ms % day) % hour) / minute);
//         // Remaining seconds
//         const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//         return { days, hours, minutes, seconds };
//     },
//     addLeadingZero(value) {
//         return String(value).padStart(2, 0);
//     },
// };

// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from "notiflix";

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//     onClose(selectedDates) {
//       const selectedDateUnix = selectedDates[0].getTime();
//     let id = null;

//     if (Date.now() > selectedDateUnix) {
//       Notiflix.Notify.failure('Please choose a date in the future');

//       buttonStartTimer.disabled = true;
//       return;
//     } else {
//         buttonStartTimer.disabled = false;
//     }
//     // console.log(selectedDates[0]);
//   },
// };

// const inputDataEl = document.querySelector('#datetime-picker');
// flatpickr(inputDataEl, options);
// const buttonStartTimer = document.querySelector('button[data-start]');
// buttonStartTimer.addEventListener('click', () => {
//     const timer = {
//   timerDeadline: new Date(inputDataEl.value),
//   intervalId: null,
//   rootSelector: document.querySelector('.timer'),

//   start() {
//     this.intervalId = setInterval(() => {
//       const ms = this.timerDeadline - Date.now();

//       if (ms <= 0) {
//         this.stop();

//         return;
//       }

//       const { days, hours, minutes, seconds } = this.convertMs(ms);

//       this.rootSelector.querySelector('.js-timer__days').textContent = this.addLeadingZero(days);
//       this.rootSelector.querySelector('.js-timer__hours').textContent = this.addLeadingZero(hours);
//       this.rootSelector.querySelector('.js-timer__minutes').textContent = this.addLeadingZero(minutes);
//       this.rootSelector.querySelector('.js-timer__seconds').textContent = this.addLeadingZero(seconds);

//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//   },

// convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// },

//   addLeadingZero(value) {
//     return String(value).padStart(2, 0);
//   },

//     };
//     timer.start();

// })







import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysVal = document.querySelector('[data-days]');
const hoursVal = document.querySelector('[data-hours]');
const minutesVal = document.querySelector('[data-minutes]');
const secondsVal = document.querySelector('[data-seconds]');

let timerId = null;
let userDates = null;
startBtn.disabled = true;

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };

  function pad(value) {
    return String(value).padStart(2, 0);
  };

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(selectedDates[0] <= Date.now()) {
        Notiflix.Notify.failure("Please choose a date in the future");
        return;
      }
      startBtn.disabled = false;
      userDates = selectedDates[0];
    },
  };

flatpickr(input, options);

  startBtn.addEventListener('click', () => {

    timerId = setInterval(() => {
        const diff = userDates - Date.now();
        if(diff <= 0) {
            clearInterval(timerId);

            return;
        }
       const {days, hours, minutes, seconds} = convertMs(diff);
       daysVal.textContent = pad(days);
       hoursVal.textContent = pad(hours);
       minutesVal.textContent = pad(minutes);
       secondsVal.textContent = pad(seconds);
    }, 1000);
  });