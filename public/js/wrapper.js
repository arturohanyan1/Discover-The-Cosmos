const wrapper = document.querySelector('.wrapper');

const pageSlider = new Swiper('.page', {

  wrapperClass: 'page_wrapper',
  slideClass: 'page_screen',
  direction: 'vertical',
  slidesPerView: 'auto',
  parallax: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  watchOverflow: true,
  speed: 800,
  observeParents: true,
  observeSlideChildren: true,

  pagination: {
    el: '.page_pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'page_bullet',
    bulletActiveClass: 'page_bullet_active',
  },

  scrollbar: {
    el: 'page_scroll',
    dragClass: 'page_drag-scroll',
    draggable: true,
  },

  init: false,

  on: {
    init: function() {
      menuSlider();
      setScrollType();
      wrapper.classList.add('_loaded');
    },
    slideChange: function() {
      menuSliderRemove();
      menuLinks[pageSlider.realIndex].classList.add('_active');
    },
    resize: function() {
      setScrollType();
    }
  },
});

let menuLinks = document.querySelectorAll('.menu_link');

function menuSliderRemove() {
  const menulinkActive = document.querySelector('.menu_link._active');
  if (menulinkActive) {
    menulinkActive.classList.remove('_active');
  }
}

function menuSlider() {
  if (menuLinks.length > 0) {
    menuLinks[pageSlider.realIndex].classList.add('_active');
    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener('click', (e) => {
        menuSliderRemove();
        pageSlider.slideTo(index, 800);
        menuLink.classList.add('_active');
        e.preventDefault();
      });
    }
  }
}

function setScrollType() {
  if (wrapper.classList.contains('_free')) {
    wrapper.classList.remove('_free');
    pageSlider.params.freeMode = false;
  }
  for (let index = 0; index < pageSlider.slides.length; index++) {
    const pageSlide = pageSlider.slides[index];
    const pageSlideContent = pageSlide.querySelector('.screen_content');
    if (pageSlideContent) {
      const pageSlideContentHeight = pageSlideContent.offsetHeight;
      if (pageSlideContentHeight > window.innerHeight) {
        wrapper.classList.add('_free');
        pageSlider.params.freeMode = true;
        break;
      }
    }
  }
}

pageSlider.init();
