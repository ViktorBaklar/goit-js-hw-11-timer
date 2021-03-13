class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.clocks();
  }

  clocks() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      if (deltaTime < 0) {
        refs.timer.innerHTML = 'You Are Out Of Time';
      }
      const time = this.getTimeComponents(deltaTime);
      this.updateTimer(time);
    }, 1000);
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }

  // getRender ()  {
    
  // }

  updateTimer({ days, hours, mins, secs }) {
    const timer = document.querySelector(this.selector);
    const refs = {
      // timer: document.querySelector('.timer'),
      days: timer.querySelector('[data-value="days"]'),
      hours: timer.querySelector('[data-value="hours"]'),
      mins: timer.querySelector('[data-value="mins"]'),
      secs: timer.querySelector('[data-value="secs"]'),
    };
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
    
  // days.insertAdjacentText('beforeend', days);
  // hours.insertAdjacentText('beforeend', hours);
  // mins.insertAdjacentText('beforeend', mins);
  // secs.insertAdjacentText('beforeend', secs);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Mar 9, 2022'),
});
const timer_2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Sep 10, 2021'),
});