$(document).ready(function() {
	flexibility(document.documentElement);

	//BTN-CATALOG
	$("body").on("click", ".btn-catalog", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.catalog-overlay').fadeToggle();
		$('.page-header__catalog').fadeToggle();
	})
	$("body").on("click", ".catalog-overlay", function(e){
		e.preventDefault();
		$(this).fadeOut();
		$('.page-header__catalog').fadeOut();
		$('.catalog-overlay').toggle();

		$('.btn-catalog').removeClass('active');
	})

	//SCROLL-CUSTOM
	if ($(".page-header__catalog").length>0) {
		$(".page-header__catalog").mCustomScrollbar();
	}
	if ($(".partners__list").length>0) {
		$(".partners__list").mCustomScrollbar();
	}

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


	//TEXT-TRUNCATE
	$('.product-info__toggle').jTruncate({
        length: 180,
        minTrail: 0,
        moreText: "Подробнее",
        lessText: "Скрыть",
        moreAni: 10,
        lessAni: 10,
	});

	//SCROLL-CUSTOM
	if ($(".product-info__toggle").length>0) {
		$(".product-info__toggle").mCustomScrollbar();
	}

	//CATALOG-LABEL REMOVE
    $("body").on("click", ".catalog-labels__close", function(e){
		e.preventDefault();
		$(this).parents('.catalog-labels__item').remove();
	})


	//POPUPLAR SLIDER
	if ($('.popular__slider').length>0) {
		$('.popular__slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			lazyLoad: 'progressive',
			useTransform:true,
			"accessibility": false,
			dots:false,
			arrows:true
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

	//BENEFITS SLIDER
	if ($('.benefits__slider').length>0) {
		$('.benefits__slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			lazyLoad: 'progressive',
			useTransform:true,
			"accessibility": false,
			dots:false,
			arrows:true
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

	//MAIN-BRENDS SLIDER
	if ($('.main-brends__slider').length>0) {
		$('.main-brends__slider').slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			lazyLoad: 'progressive',
			useTransform:true,
			"accessibility": false,
			dots:false,
			arrows:true,
			autoplay: true,
  			autoplaySpeed: 2000,
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

	//CATALOG-FILTER-LINK
	$("body").on("click", ".catalog-filter-link", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.page-title').toggleClass('active');
	})

	$("body").on("click", ".catalog-filter__link", function(e){
		e.preventDefault();
		// $(this).parents('.catalog-filter__item').find('.catalog-filter__link').removeClass('active');
		$(this).toggleClass('active');
	})




	//UI-RANGE-SLIDER
	if ($( ".range-sl" ).length>0) {
		$( ".range-sl" ).slider({
			range: true,
			min: 0,
			max: 4550,
			values: [ 500, 2000 ],
			slide: function( event, ui ) {
				$( ".range-show" ).text(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
				//$(ui.handle).find('span').html('$' + ui.value);
			}
		});
			$( ".range-show" ).text( $( ".range-sl" ).slider( "values", 0 ) +
			" - " + $(".range-sl" ).slider( "values", 1 ) );
	}



	//MAP
	if ($('#map').length>0) {
		bounds = new google.maps.LatLngBounds(), markers=[], alternateMarkers=[], markersIcon=[];
		var mapOptions = {
		    zoom: 0, //Set to 0 because we are using auto formatting w/ bounds
		    zoomControl: true,
		    mapTypeControl: false,
	        navigationControl: false,
	        scrollwheel: true,
	        pancontrol:false,
	        scaleControl: false,
	        streetViewControl: false,
	        disableDefaultUI:true,
		};

		map = new google.maps.Map(document.getElementById("map"), mapOptions);
		map.fitBounds(bounds);

		$(".partners__item").each(function(index, element) {
		    var markerLatLng = new google.maps.LatLng($(this).find(".object_lat").text(), $(this).find(".object_long").text());
		    var markImg=new google.maps.MarkerImage('img/content/search-label.png');
		    var altMarkImg=new google.maps.MarkerImage('img/content/search-label-or.png');

	        var id=$(element).data('label');

		    var marker = new google.maps.Marker({
	    	    position: markerLatLng,
	    	    map: map,
	    	    icon: markImg,
	            customInfo: id,
		    });
		    
		    markers.push(marker);
		    markersIcon.push(markImg);
		    alternateMarkers.push(altMarkImg);
		    //add to bounds for auto center and zoom
		    bounds.extend(markerLatLng);

	        google.maps.event.addListener(marker, "mouseover", function (e) {
	            var curMarker = this;
	            curMarker.setIcon(alternateMarkers[id]);
	            var currentId = this.customInfo;
	            //console.log(currentId);
	            $(".partners__item").each(function(index, element) {
	                var idOver = $(element).data('label');

	                // var objDivPosition = $('div#' + clickedID)[0].offsetTop;

	                

	                //console.log(element);

	                if (idOver === currentId){
	                    $(this).addClass('active');
	                }

	                $(".partners__list").mCustomScrollbar("scrollTo", $(".partners__item.active"));
	            });
	        }); 
	        google.maps.event.addListener(marker, "mouseout", function (e) {
	            var curMarker = this;
	            curMarker.setIcon(markersIcon[id]);
	            var currentId = this.customInfo;
	            $(".partners__item").each(function(index, element) {
	                var idOver = $(element).data('label');
	                if (idOver === currentId){
	                    $(this).removeClass('active');
	                }
	            });
	        });
		});

		$(".partners__item").on('mouseenter', function(){
		    var id=$(this).data('label');
		    markers[id].setIcon(alternateMarkers[id]);
		}).on('mouseleave', function(){
		    var id=$(this).data('label');
		    markers[id].setIcon(markersIcon[id]);      
		});
	}
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
		<li><a href="product.html">Товар</a></li> \
		<li><a href="catalog1.html">Каталог1</a></li> \
		<li><a href="catalog2.html">Каталог2</a></li> \
		<li><a href="order.html">Заказ</a></li> \
		<li><a href="order2.html">Заказ 2</a></li> \
		<li><a href="partners.html">Партнеры</a></li> \
		<li><a href="page-404.html">404</a></li> \
	</ol> \
</div>');
