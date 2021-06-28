console.log(window.scrollY);

const navbar = document.getElementById('navbar');
const icon1 = document.querySelector('.fas.fa-home.fa-3x');
const icon2 = document.querySelector('.fas.fa-cross.fa-3x');
const icon3 = document.querySelector('.fas.fa-heart.fa-3x');

let scrollPos = 1;

document.addEventListener('scroll', function(e){
  scrollPos = window.scrollY;

  if(scrollPos > 620 && window.innerWidth > 800){
    navbar.style.display = 'none';
  }
  else if(window.innerWidth > 800){
    navbar.style.display = 'flex';
  }

  if(scrolPos > 620 )
// if(window.scrollY > 195 && window.innerWidth < 768){
//   navbar.style.display = 'none';
// }

// else if(scrollPos < window.scrollY){
//   navbar.style.display = 'flex';
// }

// else{
//   navbar.style.display = 'flex';
// }

console.log(window.scrollY);

});

//Change icon sizes
// if(window.innerWidth < 768){
//   icon1.className = 'fas fa-home';
//   icon2.className = 'fas fa-cross';
//   icon3.className = 'fas fa-heart';
// }