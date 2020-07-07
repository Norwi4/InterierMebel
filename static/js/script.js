$(document).ready(function(){
    $(".owl-carousel").owlCarousel({

        loop: true,
        margin:10,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            850:{
                items: 3
            },
            1400:{
                items: 4
            },
            1650:{
                items: 5
            }
        }
    });
});