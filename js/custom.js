// JavaScript Document
$(document).ready(function(){
	$(".btn-menu").click(function(){
		$(".menu").slideToggle()
	})
})
$('#banner').owlCarousel({
    loop:true,
    margin:10,
   /* nav:true,*/
	smartSpeed:500,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,
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

$('#khoa-hoc').owlCarousel({
    loop:true,
    margin:30,
   /* nav:true,*/
	smartSpeed:500,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})