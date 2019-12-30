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
		$(document).on('taphold',nextQ );
		$(document).on('swipeleft',wrongA );
		$(document).on('swiperight',rightA );
	}

});


function keydownFun(event){
	// console.log(event.which);

	switch ( event.which ){
		case 38: //鍵盤up
			prveQ();
			break;

		case 40: //鍵盤down
			nextQ();
			break;

		case 39: //鍵盤right
			rightA();
			break;

		case 37: //鍵盤left
			wrongA();
			break;

		case 32: //空白鍵
			// console.log('還原');
			resetpopup();
			break;
	}

}

function nextQ(){
	// console.log('下一題');
	resetpopup();
	$('#wrap').removeClass();
	qNum++;
	if(qNum == 13){
		qNum = 12;
	}
	$('#wrap').addClass('q'+qNum);
}

function prveQ(){
	// console.log('上一題');
	resetpopup();
	$('#wrap').removeClass();
	qNum--;
	if(qNum == 0){
		qNum = 1;
	}
	$('#wrap').addClass('q'+qNum);
}

function rightA(){
	$('#result').removeClass();
	$('#result').addClass('right');
	$('.popup').stop().fadeIn();
}

function wrongA(){
	$('#result').removeClass();
	$('#result').addClass('wrong');
	$('.popup').stop().fadeIn(function(){
		if(isMobile == 1){
			setTimeout(resetpopup, 3000);
		}
	});
}

function resetpopup(){
	$('#result').removeClass();
	$('.popup').stop().fadeOut();
}