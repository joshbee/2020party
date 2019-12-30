var qNum = 1;
var isMobile = 0;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	isMobile = 1;
} else {
	isMobile = 0;
}


$(document).ready(function() {

	$('#wrap').addClass('q'+qNum);

	if(isMobile == 0){
		$(document).keydown(keydownFun);
	}else {
		$(document).on('swipedown',function(){alert("swipedown..");} );
		$(document).on('swipeup',function(){alert("swipeup..");} );
		$(document).on('swipeleft',function(){alert("swipeleft..");} );
		$(document).on('swiperight',function(){alert("swiperight..");} );
	}

});


function keydownFun(event){
	// console.log(event.which);

	switch ( event.which ){
		case 37: //鍵盤left
			// console.log('上一題');
			resetpopup();
			$('#wrap').removeClass();
			qNum--;
			if(qNum == 0){
				qNum = 1;
			}
			$('#wrap').addClass('q'+qNum);
			break;

		case 39: //鍵盤right
			// console.log('下一題');
			resetpopup();
			$('#wrap').removeClass();
			qNum++;
			if(qNum == 13){
				qNum = 12;
			}
			$('#wrap').addClass('q'+qNum);
			break;

		case 38: //鍵盤up
			// console.log('對');
			$('#result').removeClass();
			$('#result').addClass('right');
			$('.popup').stop().fadeIn();
			break;

		case 40: //鍵盤down
			// console.log('錯');
			$('#result').removeClass();
			$('#result').addClass('wrong');
			$('.popup').stop().fadeIn();
			break;

		case 32: //空白鍵
			// console.log('還原');
			resetpopup();
			break;
	}

}


function resetpopup(){
	$('#result').removeClass();
	$('.popup').stop().fadeOut();
}