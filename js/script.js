import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gsap from 'gsap';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3.5,
  spaceBetween: 25,
  loop: true,
  modules: [Navigation, Pagination],
    breakpoints: {
    375: {
      slidesPerView: 1,
      
    },
    768: {
       slidesPerView: 2.5,
     
    }
   
  },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
//apply some gsap 
const timeLineGsap = gsap.timeline()

window.addEventListener('DOMContentLoaded',()=>{

timeLineGsap.from('.hero__content h1',{
   opacity:0,
   scale:1.5,
   duration:2
})

timeLineGsap.from('.hero__content .container >div> p',{
    opacity:0,
    translateX:-100
})
timeLineGsap.from('.hreflink',{
    opacity:0,
    translateY:100,
      onComplete: () => {
    gsap.set(".hreflink", { clearProps: "all" }); // removes all inline styles set by GSAP
  }
   
})
timeLineGsap.from('.hero-bkground',{
  translateX:1000,
  rotate:90,
  duration:1.5
})
})
