$(document).ready(function() {
  const healthyMenu = document.querySelector('.food-tab__menu-tab--healthy');
  const lunchMenu = document.querySelector('.food-tab__menu-tab--lunch');
  const vegeMenu = document.querySelector('.food-tab__menu-tab--vege');
  const shakeMenu = document.querySelector('.food-tab__menu-tab--shake');

  const healthySlider = document.querySelector('.food-tab__slider--healthy');
  const lunchSlider = document.querySelector('.food-tab__slider--lunch');
  const vegeSlider = document.querySelector('.food-tab__slider--vege');
  const shakeSlider = document.querySelector('.food-tab__slider--shake');

  const HIDE_SLIDER = 'food-tab__slider--hide';
  const ACTIVE_MENU_TAB = 'food-tab__menu-tab--active';

  healthyMenu.addEventListener('click', function(){
    healthyMenu.classList.add(ACTIVE_MENU_TAB);
    lunchMenu.classList.remove(ACTIVE_MENU_TAB);
    vegeMenu.classList.remove(ACTIVE_MENU_TAB);
    shakeMenu.classList.remove(ACTIVE_MENU_TAB);
    healthySlider.classList.remove(HIDE_SLIDER);
    lunchSlider.classList.add(HIDE_SLIDER);
    vegeSlider.classList.add(HIDE_SLIDER);
    shakeSlider.classList.add(HIDE_SLIDER);
  });

  lunchMenu.addEventListener('click', function(){
    healthyMenu.classList.remove(ACTIVE_MENU_TAB);
    lunchMenu.classList.add(ACTIVE_MENU_TAB);
    vegeMenu.classList.remove(ACTIVE_MENU_TAB);
    shakeMenu.classList.remove(ACTIVE_MENU_TAB);

    lunchSlider.classList.remove(HIDE_SLIDER);
    healthySlider.classList.add(HIDE_SLIDER);
    vegeSlider.classList.add(HIDE_SLIDER);
    shakeSlider.classList.add(HIDE_SLIDER);
  });

  vegeMenu.addEventListener('click', function(){
    healthyMenu.classList.remove(ACTIVE_MENU_TAB);
    lunchMenu.classList.remove(ACTIVE_MENU_TAB);
    vegeMenu.classList.add(ACTIVE_MENU_TAB);
    shakeMenu.classList.remove(ACTIVE_MENU_TAB);

    vegeSlider.classList.remove(HIDE_SLIDER);
    lunchSlider.classList.add(HIDE_SLIDER);
    healthySlider.classList.add(HIDE_SLIDER);
    shakeSlider.classList.add(HIDE_SLIDER);
  });

  shakeMenu.addEventListener('click', function(){
    healthyMenu.classList.remove(ACTIVE_MENU_TAB);
    lunchMenu.classList.remove(ACTIVE_MENU_TAB);
    vegeMenu.classList.remove(ACTIVE_MENU_TAB);
    shakeMenu.classList.add(ACTIVE_MENU_TAB);
    
    shakeSlider.classList.remove(HIDE_SLIDER);
    vegeSlider.classList.add(HIDE_SLIDER);
    lunchSlider.classList.add(HIDE_SLIDER);
    healthySlider.classList.add(HIDE_SLIDER);
  });
  
  $('.food-tab__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    infinite: true,
    prevArrow:"<div class='slick-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
    nextArrow:"<div class='slick-next'><i class='fa fa-angle-right' aria-hidden='true'></i></div>"
  });

  $('.testimonial__slider').slick({
    variableWidth: true,
    centerMode: true, 
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });



  

});

