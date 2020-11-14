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
let lessText = 'less';
// ------------------------------ \\
document.querySelector('button').addEventListener('click', () => {
    slideToggle(document.querySelector('main'), 1500);
    rotateToggle(document.querySelector('span img'), 1500);
    document.querySelector('button').textContent = lessText;
});