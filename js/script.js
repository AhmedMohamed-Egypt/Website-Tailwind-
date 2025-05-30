import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

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


gsap.registerPlugin(ScrollTrigger)
const triggerConfig = {
  

 trigger:".pick-sun",
     start:"top 50%", 
};

 gsap.from(".pick-sun__parent",{
  scrollTrigger:triggerConfig,
  autoAlpha:0,
  translateY:500,
  opacity:0,
  duration:1,
})
gsap.from(".pick-sun__leftimg",{
  scrollTrigger:triggerConfig,
  autoAlpha:0,
  translateX:-1500,
  opacity:0,
   duration:1,

})
gsap.from(".rightPurple",{
  scrollTrigger:triggerConfig,
  autoAlpha:0,
  translateX:1500,
  opacity:0,
   duration:1,

})

timeLineGsap.from('.hero__content h1',{
   autoAlpha:0,
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

//

//