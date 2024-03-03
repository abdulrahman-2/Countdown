let countDownDate = new Date("Mar 27, 2024 03:21:50").getTime();

let counter = setInterval(() => {
  // get data now
  let dateNow = new Date().getTime();

  // get differance
  let dateDiff = countDownDate - dateNow;

  // get time unit
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
  console.log(days, hours, minutes, seconds);
}, 1000);
