// Hero slider
$(document).ready(function () {
  $('.hero__text-box').slick({
    autoplay: true,
    pauseOnHover: true
  });
});

// Scroll to anchor
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

