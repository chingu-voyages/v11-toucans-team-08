let slideIndex = 0;

const showSlides = () => {
  const slides = document.querySelectorAll(".image-slider");
  for (let i = 0; i< slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;

  if(slideIndex > slides.length){
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout( showSlides, 3000);
}

showSlides();

new Glide('.glide').mount({
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
  arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
  },

  autoplay: 4000,
  type:'carousel',

});
