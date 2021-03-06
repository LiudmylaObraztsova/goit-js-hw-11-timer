import './sass/main.scss';

class CountdownTimer {
    constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
        this.intervalId = null;
        this.refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};
  }

    getTimeComponents=(time) =>{
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        this.refs.days.textContent = `${days}`;
        this.refs.hours.textContent = `${hours}`;
        this.refs.mins.textContent = `${mins}`;
        this.refs.secs.textContent = `${secs}`;

    };


    pad=(value)=> {
    return String(value).padStart(2, "0");
    };

    start=()=> {
    refs.days.textContent = "00";
    refs.hours.textContent = "00";
    refs.mins.textContent = "00";
    refs.secs.textContent = "00";
    }
    
    renderTimer=()=> {
    const startTime = Date.now();
    const deltaTime = this.targetDate - startTime;
    this.getTimeComponents(deltaTime);
    if (deltaTime < 0) {
      clearInterval(this.intervalId);
      this.start();
    }
    }
    
    initTimer=()=> {
    this.renderTimer();
    this.intervalId = setInterval(() => {
      this.renderTimer();
    }, 1000);
  }

}


const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2022"),
});

timer.initTimer();
