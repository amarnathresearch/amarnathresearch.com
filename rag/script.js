// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

function closeMenu() {
  navLinks.classList.remove('open');
}

// ========== RESEARCH TABS ==========
document.querySelectorAll('.research-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.research-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.research-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const tabId = tab.dataset.tab;
    const panel = document.getElementById('tab-' + tabId);
    if (panel) {
      panel.classList.add('active');
    }
  });
});

// ========== SCROLL REVEAL ANIMATION ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// ========== MOUSE TRACKING EFFECT ==========
const hero = document.querySelector('.hero');
if (hero) {
  document.addEventListener('mousemove', (e) => {
    const heroGradients = hero.querySelectorAll('::before, ::after');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    hero.style.setProperty('--mouse-x', x);
    hero.style.setProperty('--mouse-y', y);
  });
}

// ========== INTERACTIVE CARD ANIMATIONS ==========
document.querySelectorAll('.impact-card, .research-item, .edu-card, .demo-card, .fund-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
  
  card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    this.style.setProperty('--card-x', x);
    this.style.setProperty('--card-y', y);
  });
});

// ========== FLOATING ANIMATION ON SCROLL ==========
const floatingElements = document.querySelectorAll('[class*="icon"]');
floatingElements.forEach((el, index) => {
  el.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      closeMenu();
    }
  });
});

// ========== PARALLAX SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('[class*="hero"]');
  
  parallaxElements.forEach(el => {
    if (el.classList.contains('hero-content')) {
      el.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});

// ========== DYNAMIC TEXT COLOR ON SCROLL ==========
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      const scrollPercentage = (window.innerHeight - rect.top) / window.innerHeight;
      section.style.opacity = Math.max(0.5, Math.min(1, scrollPercentage));
    }
  });
});

// ========== BUTTON RIPPLE EFFECT ==========
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// ========== DYNAMIC GLOW EFFECT ON HOVER ==========
document.querySelectorAll('[class*="card"], [class*="btn"]').forEach(element => {
  element.addEventListener('mouseenter', function() {
    this.style.boxShadow = `0 0 30px rgba(0, 217, 255, 0.4)`;
  });
  
  element.addEventListener('mouseleave', function() {
    this.style.boxShadow = '';
  });
});

// ========== COUNTER ANIMATION ==========
const counters = document.querySelectorAll('.hero-stat-num');
counters.forEach(counter => {
  const target = parseInt(counter.textContent);
  let current = 0;
  const increment = target / 30;
  
  const updateCount = () => {
    current += increment;
    if (current < target) {
      counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : counter.textContent.includes('M') ? 'M' : counter.textContent.includes('K') ? 'K' : '');
      requestAnimationFrame(updateCount);
    } else {
      counter.textContent = counter.getAttribute('data-target') || counter.textContent;
    }
  };
  
  observer.observe(counter, {
    threshold: 0.5
  });
});

// ========== PAGE LOAD ANIMATION ==========
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.6s ease';
});

// ========== MOBILE MENU CLICK HANDLERS ==========
if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ========== INTERSECTION OBSERVER FOR MORE ELEMENTS ==========
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

console.log('✨ Interactive website loaded successfully!');
