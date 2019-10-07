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


/**faq**/

const question = document.getElementsByClassName("question-title");
let i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function(e) {

    e.preventDefault();

    this.classList.toggle("active");
    
    const answer = this.nextElementSibling;

    // console.log(answer);
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";      
    }
  });
 
}

var btn = document.getElementById('modal_opener');
var modal = document.querySelector('.modal');

function attachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').addEventListener('click', toggleModal);
}

function detachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
}

function toggleModal() {
  var currentState = modal.style.display;

  // If modal is visible, hide it. Else, display it.
  if (currentState === 'none') {
    modal.style.display = 'block';
    attachModalListeners(modal);
  } else {
    modal.style.display = 'none';
    detachModalListeners(modal);  
  }
}

btn.addEventListener('click', toggleModal);

/** Shop modal **/

var shopModal = document.querySelector(".shop-modal");

var openModalButton = document.querySelector(".shop-button").getElementsByTagName("button")[0];

var closeButton = document.getElementsByClassName("close")[0];

function toggleShopModal() {
  shopModal.classList.toggle("show-shop-modal");
}

function windowOnClick(event) {
  if (event.target === shopModal) {
      toggleShopModal();
  }
}

openModalButton.addEventListener("click", toggleShopModal,false);
closeButton.addEventListener("click", toggleShopModal,false);
window.addEventListener("click", windowOnClick,false);