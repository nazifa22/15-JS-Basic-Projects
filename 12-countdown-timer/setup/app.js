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

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

//Future date setting up manuallu
// let futureDate = new Date(2021, 4, 21, 11, 59, 0);
//Setting future date dynamically
let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
tempDay = tempDate.getDay() 

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 59, 0)
console.log(futureDate)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const secs = futureDate.getSeconds()

let month = futureDate.getMonth()
month = months[month]
let day = futureDate.getDay()
day = weekdays[day]

giveaway.textContent = `giveaway ends on ${day} ${month} ${year}, ${hours}:${minutes}`

const futureTime = futureDate.getTime()
function getRemainingTime() {
  const today = new Date().getTime()
  const remainingTime = futureTime - today
  const oneDay = 24*60*60*1000
  const oneHour = 24*60*1000
  const oneMinute = 60*1000

  let days = remainingTime / oneDay
  days = Math.floor(days)

  let hours = (remainingTime % oneDay) / oneHour
  hours = Math.floor(hours)

  let minutes = (remainingTime % oneHour) / oneMinute
  minutes = Math.floor(minutes)

  let seconds = (remainingTime % oneMinute) / 1000
  seconds = Math.floor(seconds)

  // Setting values
  let values = [days, hours, minutes, seconds]

  //Adding Zero if < 10
  function format(item) {
    if(item < 10) {
      return (item = `0${item}`)
    }
    return item
  }

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index])
  })

  if(remainingTime < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}

//Countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()