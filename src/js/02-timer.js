// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// Для отображения уведомлений пользователю вместо window.alert() используй библиотеку notiflix.
import Notiflix from 'notiflix';


const selector = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    {
        if (selectedDates[0] < new Date()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
            }
          }
        }
    };
    
    flatpickr(selector, options);

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
      }
      
    function addLeadingZero(value) {
        return value
               .toString()
               .padStart(2, '0')
      }

    startBtn.addEventListener('click', () => {
        let timerId = setInterval(() => {
            let deltaTime = new Date(selector.value) - new Date();
            startBtn.disabled = true;
        if (deltaTime >= 0) {
            let timer = convertMs(deltaTime);
            daysEl.textContent = addLeadingZero(timer.days);
            hoursEl.textContent = addLeadingZero(timer.hours);
            minutesEl.textContent = addLeadingZero(timer.minutes);
            secondsEl.textContent = addLeadingZero(timer.seconds);
            daysEl.style.color = 'black';
            hoursEl.style.color = 'red';
            minutesEl.style.color = 'yellow';
            secondsEl.style.color = 'green';
        }
        else {
            Notiflix.Notify.success('Finished');
            clearInterval(timerId);
            daysEl.style.color = 'black';
            hoursEl.style.color = 'black';
            minutesEl.style.color = 'black';
            secondsEl.style.color = 'black';
        }
        }, 1000);
      });

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}