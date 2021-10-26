var index=1;
var i=1;
var button1=$(".btn-l");
var button2=$(".btn-r");
var box1=$(".b-con");
var btn1=$(".w-button-1");
var btn2=$(".w-button-2");
var img1=$(".one a img");
var img2=$(".two a img");
var img3=$(".three a img");

//按钮实现主页图片的前一张后一张功能
function show(){
	change(index);
}

button1.click(function(){
	index--;
	if(index<1){
		index=5;
	}
	show()
});
button2.click(function(){
	index++;
	if(index>5){
		index=1;
	}
	show()
});
function change(){
	$(".b-con").css({
		"background":"url(img/"+index+".jpg)"	
	});	
}

//主页图片的自动播放
function auto(){
	time=setInterval(function(){
		index++;
		if(index>5){
			index=1;
		}
		change();
	},2000);
}
auto();
//图片自动播放的暂停与继续
box1.mouseover(function(){
	clearInterval(time);
});
box1.mouseout(function(){
	auto();
});

//秒杀图片的按钮控制
function tran(){
	img1.attr("src","img/w"+i+".jpg");
	img2.attr("src","img/w"+i+".jpg");
	img3.attr("src","img/w"+i+".jpg");
}
btn1.click(function(){
	i--;
	if(i<1){
		i=3;
	}
	tran();
});
btn2.click(function(){
	i++;
	if(i>3){
		i=1;
	}
	tran();
});
$("#1a").click(function(){
	index=1;
	change();
});
$("#2a").click(function(){
	index=2;
	change();
});
$("#3a").click(function(){
	index=3;
	change();
});
$("#4a").click(function(){
	index=4;
	change();
});
$("#5a").click(function(){
	index=5;
	change();
});
