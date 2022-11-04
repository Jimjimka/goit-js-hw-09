import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const datetimePickerEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
let rootSelector = document.querySelector('.timer')
startBtnEl.setAttribute('disabled', 'true')

let deadLine;

const options = {

  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
  onClose(selectedDates) {
      console.log(selectedDates[0]);      
      if (selectedDates[0] < Date.now()) {
          Notiflix.Notify.failure("Please choose a date in the future");
      } else if (selectedDates[0] > Date.now()) {
          startBtnEl.disabled = false;
      }
      deadLine = selectedDates[0];
  },
};

flatpickr(datetimePickerEl, options);


startBtnEl.addEventListener('click', () => {
timer.start()
})


const timer = {
    intervalId: null,

    start() {
        this.intervalId = setInterval(() => {
            const different = deadLine.getTime() - Date.now();
 

            if (different <= 0) {
                this.stop()
                return;
            }
            
            const { days, hours, minutes, seconds } = this.convertMs(different);

            rootSelector.querySelector('[data-days]').textContent = this.addLeadingZero(days);
            rootSelector.querySelector('[data-hours]').textContent = this.addLeadingZero(hours);
            rootSelector.querySelector('[data-minutes]').textContent = this.addLeadingZero(minutes);
            rootSelector.querySelector('[data-seconds]').textContent = this.addLeadingZero(seconds);
            

        }, 1000)
    },

   
    stop() {
        clearInterval(this.intervalId);
    },

    convertMs(ms) {
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
    },
    addLeadingZero(value) {
        return String(value).padStart(2, 0);
    },
};