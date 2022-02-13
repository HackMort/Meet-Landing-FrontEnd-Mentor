const smoothScrollLinks = document.querySelectorAll('.smooth-link');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const sectionID = link.getAttribute('href');
    document.querySelector('' + sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const ghLinks = document.querySelectorAll('.gh-link');
ghLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    // confirm before opening new tab
    if (confirm('Would you like to visit the Repository on Github?')) {
      window.open(link.getAttribute('href'));
    }
  });
});