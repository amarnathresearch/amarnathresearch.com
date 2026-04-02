// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close menu function
function closeMenu() {
  navLinks.classList.remove('open');
}

// Research tabs functionality
document.querySelectorAll('.research-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and panels
    document.querySelectorAll('.research-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.research-panel').forEach(p => p.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding panel
    tab.classList.add('active');
    const tabId = tab.dataset.tab;
    const panel = document.getElementById('tab-' + tabId);
    if (panel) {
      panel.classList.add('active');
    }
  });
});

// Scroll reveal animation using Intersection Observer
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

// Observe all reveal elements
document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});
