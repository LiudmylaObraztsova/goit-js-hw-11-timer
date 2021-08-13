import './sass/main.scss';

// const refs = {
//     days: document.querySelector('[data-value="days"]'),
//     hours: document.querySelector('[data-value="hours"]'),
//     minutes: document.querySelector('[data-value="mins"]'),
//     seconds: document.querySelector('[data-value="secs"]'),
    
// }
// console.log('refs.days :>> ', refs.days); //проверка ссылки

class countdownTimer {
    constructor() {
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            minutes: document.querySelector('[data-value="mins"]'),
            seconds: document.querySelector('[data-value="secs"]'),
            selector: document.querySelector(selector),
        }
        
        this.targetDate = targetDate;
        this.intervalId = null;
            
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    }

    
}
