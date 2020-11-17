// --------------------------------------- \\
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
// let qouteUrl = 'https://programming-qoutes-api.herokuapp.com/qoutes/lang/en/';
// fetch(qouteUrl)
// .then(res => res.json())
// .then(qouteData => {
//     console.log(qouteData);
// });