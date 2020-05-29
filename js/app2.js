function getParameter(){
	//Return
	var ret=null;
	//URL取得
  var url = location.href; 
  
  console.log(url);

	//URL分割
	parameters = url.split("?");
	//パラメータあり
	if( parameters.length > 1 ) {
		//分割
    var params   = parameters[1].split("&");
    
		//パラメータ配列
		var paramsArray = [];
		//パラメータ数繰り返し
		for ( i = 0; i < params.length; i++ ) {
       var neet = params[i].split("=");
       
		   paramsArray.push(neet[0]);
		   paramsArray[neet[0]] = neet[1];
		}
		//Get Param
		ret = paramsArray["player"];
	}
    //
    return ret;
};

let player = getParameter();

let slideIndex = 0;

if (player == 'federer') {
  slideIndex = 3;
} else if (player == 'nadal') {
  slideIndex = 2;
} else if (player == 'novak') {
  slideIndex = 1;
} else if (player == 'murray') {
  slideIndex = 4;
}


var sliderSelector = '.swiper-container',
    options = {
      initialSlide: slideIndex,
      init: false,
      loop: true,
      speed:800,
      slidesPerView: 2, // or 'auto'
      // spaceBetween: 10,
      centeredSlides : true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();