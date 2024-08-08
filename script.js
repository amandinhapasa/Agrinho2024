const hoursElement   = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')


function fixTime(time){
    return time < 10 ? '0'+time : time
}

function newTime(){
    const date    = new Date()
    const hours   = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    
    hoursElement.textContent   = fixTime(hours)
    minutesElement.textContent = fixTime(minutes)
    secondsElement.textContent = fixTime(seconds)
}

newTime()
setInterval(newTime, 1000)

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.addEventListener('scroll', function() {
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    scrollTopBtn.addEventListener('click', scrollToTop);
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.classList.add("hovered");
        });

        link.addEventListener("mouseout", function() {
            link.classList.remove("hovered");
        });
    });
});

