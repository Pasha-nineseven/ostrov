$(document).ready(function() {
	flexibility(document.documentElement);

	//ASIDE MENU
	$("body").on("click", ".page-aside__item--submenu > .page-aside__link", function(e){
		e.preventDefault();
		// $(this).parents('.page-aside__item--submenu').toggleClass('active');
		// $(this).next('.page-aside__list').slideToggle();

		if ($(this).parents('.page-aside__item--submenu').hasClass("active")) {
		  	$(this).parents('.page-aside__item--submenu').removeClass('active');
		  	$(this).next('.page-aside__list').slideUp();
		}
		else{
			$(this).parents('.page-aside__item--submenu').addClass('active');
		  	$(this).next('.page-aside__list').slideDown();
		}
	})


	//SLIDER-DEFAULT
	if ($('.slider-default').length>0) {
		$('.slider-default').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade:true,
			dots:true,
			arrows:true,
			useTransform:true,
			accessibility: false,
		});
	};


	//SELECT-CUSTOM
	if ($('.fs').length>0) {
		$('.fs').styler();
	}
	

	// $(".feedback-form form").submit(function() {
 //        return validate();
 //    })


 	//TABS
	$('.tabs').responsiveTabs({
	    startCollapsed: 'accordion'
	});

	//POPUP-INLINE
	$('.popup-inline-btn').magnificPopup({
		type: 'inline',
		removalDelay: 500,

		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		//midClick: true,
	});

	//ACCORDERDEON
	$("body").on("click", ".accordeon__link", function(e){
		e.preventDefault();

		$(this).parents('.accordeon__item').toggleClass('active');

	})


	//SUBMENU
	$("body").on("click", ".top-nav__item--sub .top-nav__link", function(e){
		e.preventDefault();
		
		$(this).parents('.top-nav__item--sub').toggleClass('active');
		$(this).next('.top-nav-submenu').fadeToggle(0);
	})

	$(document).click(function (e){
		var div = $(".top-nav__item--sub");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.top-nav__item--sub').removeClass('active');
			$('.top-nav-submenu').fadeOut(0);
		}
	});


	//REGISTRATION INPUT FILE
	$(".choose-file [type=file]").on("change", function(){
		// Name of file and placeholder
		var file = this.files[0].name;
		var dflt = $(this).attr("placeholder");
		if($(this).val()!=""){
			$(this).next().find('.label-title').text(file);
		} else {
			$(this).next().find('.label-title').text(dflt);
		}
	});




	//PHONE-MASK
    if ($('.phone-mask').length>0) {
    	$('.phone-mask').inputmask("+999 (99) 999-99-99");
    };




    //CART PLUS-MINUS
    if ($('.cart-table').length>0) {
    	$( ".cart-count__input" ).each(function( index ) {
		  	if ($(this).parents('.cart-count').find('.cart-count__input').val()<=1) {
	    		$(this).parents('.cart-count').find($('.cart-minus')).addClass('disable');
	    	}
		});
    
	    $('.cart-minus').click(function () {
	        var $input = $(this).parent().find('.cart-count__input');
	        var count = parseInt($input.val()) - 1;
	        count = count < 1 ? 1 : count;
	        $input.val(count);
	        $input.change();

	        if ($(this).parents('.cart-count').find('.cart-count__input').val()<=1) {
	    		$(this).parents('.cart-count').find($('.cart-minus')).addClass('disable');
	    	}
	    	else{
	    		$(this).parents('.cart-count').find($('.cart-minus')).removeClass('disable');
	    	}
	        return false;
	    });
	 
	    $('.cart-plus').click(function () {
	        var $input = $(this).parents('.cart-count').find('.cart-count__input');
	        $input.val(parseInt($input.val()) + 1);
	        $input.change();

	        if ($(this).parents('.cart-count').find('.cart-count__input').val()>=1) {
	        	$(this).parents('.cart-count').find($('.cart-minus')).removeClass('disable');
	    	}
	        return false;
	    });
    }

    //CART DELETE
    $("body").on("click", ".cart-delete", function(e){
		e.preventDefault();
		$(this).parents('tr').remove();
	})


	//MAIN SLIDER
	if ($('.main-slider').length>0) {
		$('.main-slider').slick({
			infinite: false,
			slidesToShow: 1,
			fade: true,
			lazyLoad: 'progressive',
			useTransform:true,
			"accessibility": false,
			dots:false,
  			// responsive: [
			  //   {
			  //     breakpoint: 901,
			  //     settings: {
			  //       infinite: false,
					// slidesToShow: 1,
					// fade: true,
					// lazyLoad: 'progressive',
					// useTransform:true,
					// "accessibility": false,
					// nextArrow: $('.main-slider__right'),
		  	// 		prevArrow: $('.main-slider__left'),
		  	// 		dots:true,
		  	// 		arrows:true,
			  //     }
			  //   },
		   //  ]
		});
	}


	//BRANDS-ITEM
	if ($('.brands').length>0){
		$('.brands').masonry({
			// options
			itemSelector: '.brands__item',
			//columnWidth: 200
			// horizontalOrder: true,
		});
	}


	//PRODUCT-SLIDER
	if ($('.product-slider-wrap').length>0) {
		$('.product__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots:false,
			fade: true,
			asNavFor: '.product__thumb'
		});
		$('.product__thumb').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product__slider',
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			infinite:true,
			arrows: false,
		});
		$('.product__thumb .slick-slide').eq(0).addClass('slick-active');
		$('.product__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var mySlideNumber = nextSlide;
		 	$('.product__thumb .slick-slide').removeClass('slick-active');
		 	$('.product__thumb .slick-slide').eq(mySlideNumber).addClass('slick-active');
		});
	};


	//MOBILE-SEARCH
    $("body").on("click", ".mobile-search__toggle", function(e){
		e.preventDefault();
		$('.mobile-search__form').addClass('active');
	})
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".mobile-search__form"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('active'); // скрываем его
		}
	});

	//PRODUCT-FAVORITE
    $("body").on("click", ".product__favorite", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	})


	//MOBILE-MENU
    $("body").on("click", ".mobile-menu__link", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.mobile-menu__list').slideToggle();
	})


    //MOBILE-SUBMENU
    $("body").on("click", ".mobile-nav__item--submenu .mobile-nav__link", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.mobile-nav__subnav').slideToggle();
		//$('.mobile-menu__list').slideToggle();
	})

    //MOBILE-CATALOG-MENU
    $("body").on("click", ".all-goods", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.all-goods-list').slideToggle();
		//$('.mobile-menu__list').slideToggle();
	})

	//MOBILE-CATALOG-SUBMENU
    $("body").on("click", ".all-goods-link--submenu", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.all-goods-submenu').slideToggle();
		//$('.mobile-menu__list').slideToggle();
	})
});




$(window).resize(function () {
	screenClass();
});

// $(window).load(function(){

// });

// functions
function screenClass() {
	if($(window).innerWidth() > 750) {
	    $('.all-goods-list').css('display', '');
	    $('.all-goods-submenu').css('display', '');
	    $('.mobile-menu__list').css('display', '');
	    $('.mobile-menu__link').removeClass('active');
	    $('.mobile-nav__link').removeClass('active');
	    $('.all-goods').removeClass('active');
	    $('.all-goods-link--submenu').removeClass('active');
	} 
}

// function validate() {
//     var regExp =  /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
//     var userTxt = document.forms["feedback-form"]["user_txt"];
//     var userMail = document.forms["feedback-form"]["user_email"];
//     var valide = true;
//     $(".input-wrap").removeClass('error-length').removeClass('error-mail');

//     if (userTxt.value.length < 2) {
//         valide = false;
//         $(userTxt).closest(".input-wrap").addClass("error-length");
//     }

//     if (userMail.value.length < 2) {
//         valide = false;
//         $(userMail).closest(".input-wrap").addClass("error-length");
//     }

//     if (!regExp.test(userMail.value) && userMail.value.length >= 2) {
//         valide = false;
//         $(userMail).closest(".input-wrap").addClass("error-mail");
//     }

//     return valide;
// }


// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="about.html">О нас</a></li> \
		<li><a href="index.html">Главная</a></li> \
		<li><a href="registration.html">Регистрация</a></li> \
		<li><a href="cart.html">Корзина</a></li> \
		<li><a href="cart-empty.html">Корзина пустая</a></li> \
		<li><a href="brands.html">Бренды</a></li> \
		<li><a href="cabinet.html">Личкаб</a></li> \
		<li><a href="personal-data.html">Личкаб-данные</a></li> \
		<li><a href="personal-history.html">Личкаб-история</a></li> \
		<li><a href="product.html">Товар 1</a></li> \
	</ol> \
</div>');
