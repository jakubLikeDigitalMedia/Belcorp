jQuery.noConflict();
jQuery(document).ready(function($){
	$('.slider').royalSlider({
		
		navigateByClick: false,
		sliderDrag: false,
		keyboardNavEnabled: true,
		autoScaleSlider: false,
		autoPlay: {
    		// autoplay options go gere
    		enabled: true,
    		pauseOnHover: false,
    		delay:5000
    	}
		
	});
});