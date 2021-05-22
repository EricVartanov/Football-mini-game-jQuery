



let left = 725
let right = 725
let up = 350
let down = 350
let scoreT1 = 0
let scoreT2 = 0


    

function controller (e){
    if (e.keyCode == 65) {

    left = left - 5   
    right = right + 5

    $('#ball').css('left', left + 'px');
    $('#ball').css('right', right + 'px');

    
    if (left < -30 & up > 230 & down > 230) {
    alert('Goal');
    $('.score-t1').text(scoreT1 = scoreT1 + 1);
    left = 725
    right = 725
    up = 350
    down = 350
    $('#ball').attr('style','350px','750px')
} 


} else if (e.keyCode == 68) {
   
    right = right - 10
    left = left + 10   

    $('#ball').css('left', left + 'px');
    $('#ball').css('right', right + 'px');

    
if (up > 230 & down > 230 & right < -30) {
    alert('Goal');
    $('.score-t2').text(scoreT2 = scoreT2 + 1);
    left = 725
    right = 725
    up = 350
    down = 350
    $('#ball').attr('style','350px','750px')
} 

} else if (e.keyCode == 87) {
    
    up = up - 10
    down = down + 10

    $('#ball').css('top', up + 'px');
    $('#ball').css('bottom', down + 'px');
    
   

} else if (e.keyCode == 83) {
    down = down - 10
    up = up + 10

    $('#ball').css('bottom', down + 'px');
    $('#ball').css('top', up + 'px');

   
} 
if (up < -25 || down < -25 || right < -30 & up < 230 & down > 460 || right < -30 & up > 460 & down < 230 || left < -30 & up < 230 & down > 460 || left < -30 & up > 460 & down < 230){
    alert('Out')
    left = 725
    right = 725
    up = 350
    down = 350
    $('#ball').attr('style','350px','750px')
    
} 

}
$(window).keydown(controller)



let sec=01;
let min=02;

function refresh()
{
	sec--;
	if(sec==-01){
        sec=59; min=min-1;
    } else{
        min=min;
    }
	if(sec<=9){
        sec="0" + sec;
    }

	time=(min<=9 ? "0"+min : min) + ":" + sec;
      $('#timer').text(time)
	inter=setTimeout("refresh()", 1000);
	// действие, если таймер 00:00
	if(min=='00' && sec=='00'){
		sec="00";
		clearInterval(inter);
		/* выводим сообщение в элемент с id="tut", например <div id="tut"></div> */
                alert('Game Over!');
	}
}

$(document).ready(refresh)