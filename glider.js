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