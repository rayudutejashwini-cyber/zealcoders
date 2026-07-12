
window.addEventListener('scroll', function () {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    
    let scrollBtn = document.getElementById('scrollTop');
    if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});


let hamburger = document.getElementById('hamburger');
let navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});


let allNavLinks = document.querySelectorAll('.nav-links a');
allNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});


document.getElementById('scrollTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


let faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (item) {
    let question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
       
        let isOpen = item.classList.contains('active');

       
        faqItems.forEach(function (faq) {
            faq.classList.remove('active');
        });

        
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});


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
