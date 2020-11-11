let information = document.querySelector('.information');
document.querySelector('button').addEventListener('click', function() {
    information.classList.toggle('hide');
    information.style.transitionDuration = "0.2s";
    document.querySelector('.arrow').classList.toggle('arrowRotate');
});
console.log(information);