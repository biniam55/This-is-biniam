
/* menu icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

};
/* scroll sections active link*/
let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');
window.onscroll = ()=> { //for both sticky and active sections
  /* scroll sections active link*/
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight; 
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
      });
    };
  });/* scroll sections active link*/

    /*sticky navigation bar */
    let header=document.querySelector(' .header');
    header.classList.toggle('sticky', window.scrollY > 100); 
    /*sticky navigation bar */
    /* remove navbar when menu icon clicked */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//for testimonial swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
  //for testimonial swiper
  //dark mode icon
  let darkModeIcon = document.querySelector('#dark-mode');
  darkModeIcon.onclick = ()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  };
  