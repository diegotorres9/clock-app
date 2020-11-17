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
// ----------------------------------------- \\
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
// ------------------------------------------ \\
let locationUrl = 'https://freegeoip.app/json/';
fetch(locationUrl)
.then(res => res.json())
.then(locationData => {
    document.querySelector('.location-span').textContent = `${locationData.city}, ${locationData.region_name}`;
});
// --------------------------------------------- \\
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