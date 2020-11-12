const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

 const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = new Date().getFullYear();
let tempMonth = new Date().getMonth();
let tempDay = new Date().getDate();

// let futureDate = new Date(2020,10,24,08,30,0);
// console.log(futureDate);

const futureDate = new Date(tempYear, tempMonth, tempDay+10, 08, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}: ${mins}am`;

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainTime() {
    const today = new Date().getTime();
    // console.log(today);
    const remain = futureTime - today;
    // console.log(remain);// remain in ms.
    const day1 = 24*60*60*1000;
    const hour1 = 60*60*1000;
    const min1 = 60*1000;
    // calculating all values
    let days = Math.floor(remain / day1);
    let hours = Math.floor((remain%day1)/hour1);
    let mins = Math.floor(remain%hour1/min1);
    let secs = Math.floor((remain%min1)/1000);
    
    //set values array
    const values = [days, hours, mins, secs];

    function format(item) {
        if(item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

    if(remain<0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired.</h4>`;
    }
}

// countdown
let countdown = setInterval(getRemainTime, 1000);

getRemainTime();