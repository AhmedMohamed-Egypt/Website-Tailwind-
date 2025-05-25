import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
