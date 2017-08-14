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
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions
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
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="index.html">Index</a></li> \
// 	</ol> \
// </div>');
