// Zeal Coders - Main JS
// Vaishnavi

// navbar scroll effect
window.addEventListener('scroll', function () {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // show or hide scroll top button
    let scrollBtn = document.getElementById('scrollTop');
    if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// hamburger menu toggle
let hamburger = document.getElementById('hamburger');
let navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// close menu when a link is clicked on mobile
let allNavLinks = document.querySelectorAll('.nav-links a');
allNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// scroll to top
document.getElementById('scrollTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// FAQ accordion
let faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (item) {
    let question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
        // check if already open
        let isOpen = item.classList.contains('active');

        // close all first
        faqItems.forEach(function (faq) {
            faq.classList.remove('active');
        });

        // if it was not open, open it
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});

// stats counter animation
// runs when stats section comes into view
let statsSection = document.querySelector('.stats');
let countersStarted = false;

function startCounters() {
    let counters = document.querySelectorAll('.stat-num');
    counters.forEach(function (counter) {
        let target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        let step = Math.ceil(target / 80);

        let timer = setInterval(function () {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = current;
        }, 20);
    });
}

// using Intersection Observer to trigger counter when visible
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            startCounters();
        }
    });
}, { threshold: 0.3 });

if (statsSection) {
    observer.observe(statsSection);
}
