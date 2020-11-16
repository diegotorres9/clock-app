let slideUp = (target, duration) => {
    target.style.transform = 'translateY(-300px)';
    target.style.transitionDuration = duration + 'ms';
    target.style.transitionTimingFunction = 'ease-in-out';
}
let slideDown = (target, duration) => {
    target.style.transform = 'translateY(0)';
    target.style.transitionDuration = duration + 'ms';
    target.style.transitionTimingFunction = 'ease-in-out';
}
let slideToggle = (target, duration) => {
    if(document.querySelector('main').classList.contains('slide')){
        document.querySelector('main').classList.remove('slide');
        return slideUp(target, duration);
    } else {
        document.querySelector('main').classList.add('slide');
        return slideDown(target, duration);
    }
}
// -------------------------- \\
let rotate = (target, duration) => {
    target.style.transform = 'rotate(180deg)';
    target.style.transitionDuration = duration + 'ms';
    target.style.transitionTimingFunction = 'ease-in-out';
}
let reverseRotate = (target, duration) => {
    target.style.transform = 'rotate(0)';
    target.style.transitionDuration = duration + 'ms';
    target.style.transitionTimingFunction = 'ease-in-out';
   
}
let rotateToggle = (target, duration) => {
    if(document.querySelector('span img').classList.contains('arrow')) {
        document.querySelector('span img').classList.remove('arrow');
        return rotate(target, duration);
    } else {
        document.querySelector('span img').classList.add('arrow');
        return reverseRotate(target, duration);
    }
}
// ------------------------------ \\
document.querySelector('button').addEventListener('click', () => {
    slideToggle(document.querySelector('main'), 1500);
    rotateToggle(document.querySelector('span img'), 1500);
    document.querySelector('.information').classList.toggle('hide');
});

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