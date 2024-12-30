
$ (document).ready (function(){

    $('.slider-active').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        dots: false,
        navRewind: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin:10,
        nav:true,
        navText:['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
      })










      $('.category-slider-active').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
      })
 


        $('.offer-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
          })



        
})