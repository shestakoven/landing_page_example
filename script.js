$(document).ready(function(){

	function close() {

		$('.form__container').fadeOut();
		$('body').removeClass('fixed');
	}

	function openForm() {
		$('.form__container').fadeIn();
		$('body').addClass('fixed');
	}

	$('body').on('click', '.form__close-btn', close)
	$('.btn').on('click', openForm)

	$('#tel-form').mask('+7 (999) 999-9999')
});