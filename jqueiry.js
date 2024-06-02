
//scroll effects for divs

window.addEventListener('scroll', () => {
  const scrollUpDiv = document.querySelector('.scroll-up-effect');
  const scrollPosition = window.scrollY;
  scrollUpDiv.style.transform = `translateY(${-scrollPosition * .075}px)`;
});

// 

window.addEventListener('scroll', () => {
  const scrollUpDiv = document.querySelector('.services-text');
  const scrollPosition = window.scrollY;
  scrollUpDiv.style.transform = `translateY(${-scrollPosition * .1}px)`;
});

// //////////NAVBAR

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}