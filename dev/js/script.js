const swiper = new Swiper('.header__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// Sticky Script on nav
// let nav = document.querySelector('.main__nav');
let opacitySwitch = document.querySelector('.main__nav');
let sticky = 100;
let goTop = 0;
document.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop;
    if(window.pageYOffset > sticky){
			// nav.style.opacity = 0;
			opacitySwitch.style.opacity = 0;
        if(goTop < top){
					// nav.style.opacity = 0;
					opacitySwitch.style.opacity = 0;
        }else{
					// nav.style.opacity = 1;
					opacitySwitch.style.opacity = 1;
        }
    }
    goTop = top;
});

let showSub = document.querySelector('.btn-click');
let showModal = document.querySelector('.btn-clicked');
let hideSub = document.querySelector('.btn-close');
showSub.addEventListener('click', () =>{
  showModal.style.display = 'block'
});
hideSub.addEventListener('click', () =>{
  showModal.style.display = 'none'
});