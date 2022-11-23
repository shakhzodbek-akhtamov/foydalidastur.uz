let counters = document.querySelectorAll(".counter");

let speed = 150;

counters.forEach((counter, index) => {
    function updateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;

        if (initialNumber < targetNumber) {
            counter.innerText = Math.ceil(initialNumber + incPerCount);
            setTimeout(updateCounter, 10);
        }
    }
    updateCounter();
});

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 200,
    // reset: true
});

sr.reveal(`.header-description, .section-title, .footer-wrapper, .nav`);
sr.reveal(`.header-img, .member-card`, { delay: 500 });
sr.reveal(`.comp-programs, .suggestion-description`, { origin: "left" });
sr.reveal(`.phone-programs, .suggestion-img`, { origin: "right" });
sr.reveal(`.icon-card`, { interval: 300 });
