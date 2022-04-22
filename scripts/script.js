//Navigation
const overlay = document.getElementById('navbar');
const closeMenu = document.getElementById('toggle-button');


document.getElementById('toggle-button') .addEventListener('click', function() {
    overlay.classList.add('show-menu');
document.documentElement.style.overflow = 'hidden';
document.body.scroll = "no";
});

document.getElementById('toggle-button').addEventListener('click', function(){
    overlay.classList.remove('show-menu')
document.documentElement.style.overflow = 'visible';
document.body.scroll = "yes";
});

//rotating hand

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("where-to-img");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}
