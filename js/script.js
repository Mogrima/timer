window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let deadline = '2019-03-28';

    function dateCapture() {
        let remainderMonth = document.querySelector('.remainderMonth');
        let remainderDay = document.querySelector('.remainderDay');
        let remainderYear = document.querySelector('.remainderYear');

        let y = new Date(Date.parse(deadline)).getFullYear();
        let m = new Date(Date.parse(deadline)).getMonth() + 1;
        let d = new Date(Date.parse(deadline)).getDate();

        if (m == 0) {
            remainderMonth.textContent = ' января';
        }
        if (m == 1) {
            remainderMonth.textContent = ' февраля';
        }
        if (m == 2) {
            remainderMonth.textContent = ' марта';
        }
        if (m == 3) {
            remainderMonth.textContent = ' апреля';
        }
        if (m == 4) {
            remainderMonth.textContent = ' мая';
        }
        if (m == 5) {
            remainderMonth.textContent = ' июня';
        }
        if (m == 6) {
            remainderMonth.textContent = ' июля';
        }
        if (m == 7) {
            remainderMonth.textContent = ' августа';
        }
        if (m == 8) {
            remainderMonth.textContent = ' сентября';
        }
        if (m == 9) {
            remainderMonth.textContent = ' октября';
        }
        if (m == 10) {
            remainderMonth.textContent = ' ноября';
        }
        if (m == 11) {
            remainderMonth.textContent = ' декабря';
        }

        remainderDay.textContent = d;
        remainderYear.textContent = y + ' года';
    }

    dateCapture();

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / 1000 / 60 / 60) % 24);
        let days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let days = timer.querySelector('.days');
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.days < 10) {
                days.textContent = '0' + t.days;
            } else {
                days.textContent = t.days;
            }
            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            }
            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }
            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }


            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

});