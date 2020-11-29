// ----------------- GSAP ANIMATIONS --------------- \\
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
    // document.querySelector('.information').style.position = 'absolute';
    // document.querySelector('.information').style.bottom = '-280px';
    slideAnimation();
    rotateAnimation();
});
// -------------- SET BACKGROUND IMAGE ----------------- \\
// function setBgImage(){
//     let hour = new Date().getHours();
//     return window.innerWidth <= '375px' && hour > 18 ? document.querySelector('body').style.backgroundImage = 'url(./assets/mobile/bg-image-nighttime.jpg)'
//             : window.innerWidth <= '768px' && hour > 18 ? document.querySelector('body').style.backgroundImage = 'url(./assets/tablet/bg-image-nighttime.jpg)'
//             : document.querySelector('body').style.backgroundImage = 'url(./assets/desktop/bg-image-nighttime.jpg)';
// }
// setBgImage();
// ------------- GET HOUR && SET GREETING--------------- \\
let hour = new Date().getHours();
if(hour > 5 && hour <= 11){
    document.querySelector('.greeting').textContent = 'Good Morning';
} else if (hour >= 12 && hour < 18){
    document.querySelector('.greeting').textContent = 'Good Afternoon';
} else {
    document.querySelector('.greeting').textContent = 'Good Evening';
    document.querySelector('.icon').src = './assets/desktop/icon-moon.svg';
    document.querySelector('.information').style.backgroundColor = 'rgba(0,0,0, 0.75)';
    document.querySelector('.information').style.color = '#fff';
}
console.log(hour);
// --------------- FETCH TIME AND LOCATION INFORMATION -------------------------- \\
let timeUrl = 'http://worldtimeapi.org/api/ip';
fetch(timeUrl)
.then(res => res.json())
.then(timeData => {
    let currentTime = timeData.datetime;
    let timeOptions = {hour: '2-digit', minute: '2-digit', hour12: false};
    currentTime = new Date().toLocaleTimeString([], timeOptions);
    let timezone = `<span class="timezone">${timeData.abbreviation}</span>`;
    document.querySelector('.current-time').innerHTML = `${currentTime}${timezone}`;
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