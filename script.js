let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fromTeam = urlParams.get('from') === 'team';
    const fromAbout = urlParams.get('from') === 'about';
    const fromEvents = urlParams.get('from') === 'events';

    if (fromTeam || fromAbout || fromEvents || localStorage.getItem("skipIntro") === "true") {
        intro.style.display = 'none';
        localStorage.removeItem("skipIntro");
    } else {
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 400);
            });

            setTimeout(() => {
                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50);
                });
            }, 2000);

            setTimeout(() => {
                intro.style.top = '-100vh';
            }, 2300);
        });
    }
});

document.getElementById("refreshPage").addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 0);
    setTimeout(() => location.reload(), 100);
});

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("skipIntro") === "true") {
        document.querySelector(".logo-intro").style.display = "none";
        localStorage.removeItem("skipIntro");
    }
});

