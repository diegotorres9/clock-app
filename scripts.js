const slide = gsap.timeline();
slide.to("main, .information", {duration: 1.5, y: -275});
slide.reversed(true);
function slideAnimation() {
    slide.reversed(!slide.reversed());
}
const rotate = gsap.timeline();
rotate.to(".arrow", {duration: 1.5, rotation: 180});
rotate.reversed(true);
function rotateAnimation() {
    rotate.reversed(!rotate.reversed());
}
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('.information').classList.toggle('hide');
    slideAnimation();
    rotateAnimation();
});
// --------------- FETCH TIME -------------------------- \\
let timeUrl = 'http://worldtimeapi.org/api/ip';
fetch(timeUrl)
.then(res => res.json())
.then(timeData => {
    let currentTime = timeData.datetime;
    let timeOptions = {hour: '2-digit', minute: '2-digit', hour12: false};
    currentTime = new Date().toLocaleTimeString([], timeOptions);
    let timezone = `<span class="timezone">${timeData.abbreviation}</span>`;
    document.querySelector('.current-time').innerHTML = `${currentTime}${timezone}`;
    let hour = new Date().getHours();
    if(hour >= 5 && hour < 12) {
        document.querySelector('.greeting').textContent = 'Good Morning';
    }  else if(hour > 12 && hour < 18) {
        document.querySelector('.greeting').textContent = 'Good Afternoon';
    } else {
        document.querySelector('.greeting').textContent = 'Good Evening';
        document.querySelector('img.icon').src = './assets/desktop/icon-moon.svg';
    }
    document.querySelector('.day-year').textContent = timeData.day_of_year;
    document.querySelector('.day-week').textContent = timeData.day_of_week;
    document.querySelector('.week').textContent = timeData.week_number;
    document.querySelector('.locale').textContent = timeData.timezone;
});
// -------------------- FETCH LOCATION ---------------------- \\
let locationUrl = 'https://freegeoip.app/json/';
fetch(locationUrl)
.then(res => res.json())
.then(locationData => {
    document.querySelector('.location-span').textContent = `${locationData.city}, ${locationData.region_name}`;
});
// --------------------- FETCH PROGRAMMING QUOTES ------------------------ \\
let quoteUrl = 'http://quotes.stormconsultancy.co.uk/random.json';
const getQuotes = async function() {
    fetch(quoteUrl)
    .then(res => res.json())
    .then(quoteData => {
        document.querySelector('.quote-p').textContent = `"${quoteData.quote}"`;
        document.querySelector('.quote-author').textContent = quoteData.author;
    });
}
document.querySelector('.new-quote-btn').addEventListener('click', () => {
    getQuotes();
});