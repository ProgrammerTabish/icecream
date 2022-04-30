
window.onscroll = function () { myFunction() };


var navbar = document.getElementById("navbar");


var sticky = navbar.offsetTop;


function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-20%";
    }
    prevScrollpos = currentScrollPos;
}

const square = document.querySelector('.square');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            square.classList.add('square-transition');
            return;
        }

        square.classList.remove('square-transition');
    });
});

observer.observe(document.querySelector('.square-wrapper'));
