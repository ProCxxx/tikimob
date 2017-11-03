var cactiv="mainscreen";
var x1,x2,y1,y2;
var w = window.innerWidth;
var h = window.innerHeight;
var area = false;
var out = false;

function laod(){
	var load = document.getElementById("loadscreen");
	var main = document.getElementById("mainscreen");
	var side = document.getElementById("sidebar2");
	var op = 1;
	var first=true;
	load.style.opacity = op;
	load.style.display = "block";
	main.style.opacity = 0;
	main.style.display = "none";
	setTimeout(function(){
		var interval = setInterval(function(){
			if(load.style.opacity>0){
				op-=0.1;
				load.style.opacity=op;
			}else{
				if(first){
					load.style.display="none";
					main.style.display="block";
					first=false;
					op=-0.1;
				}
				if(main.style.opacity<1){
					op+=0.1;
					main.style.opacity=op;
				}else{
					side.style.display="block";
					clearInterval(interval);
				}
			}
		},100);
	},1000);
}
function odr(){
	document.addEventListener("mousedown", down);
	document.addEventListener("mouseup", up);

	document.addEventListener("touchstart", mdown);
	document.addEventListener("touchend", mup);

}
function gouto(ajdi){
	if(ajdi==cactiv) return false;
	var second = document.getElementById(ajdi);
	var first = document.getElementById(cactiv);
	var side = document.getElementById("sidebar2");
	document.getElementById("sidebar2").style.left="-100vw";
	//document.getElementById("mainscreen").innerHTML=-100+x2/w*100+"vw";
	document.getElementById("sidebar").style.left="-100vw";
	document.getElementById("sidebar3").style.left="-20vw";
	var op = 1;
	var once=true;
	second.style.opacity = 0;
	second.style.display = "none";
	first.style.opacity = op;
	first.style.display = "block";
	
	var interval2 = setInterval(function(){
		if(first.style.opacity>0){
			op-=0.1;
			first.style.opacity=op;
		}else{
			if(once){
				first.style.display="none";
				second.style.display="block";
				once=false;
				op=-0.1;
			}
			if(second.style.opacity<1){
				op+=0.1;
				second.style.opacity=op;
			}else{
				clearInterval(interval2);
				cactiv=ajdi;
				side.style.display="block";
				side.style.left="-100vw";
				area=false;
				out=false;
			}
		}
	},100);
	
}

function down(event){
	document.addEventListener("mousemove",move);
	x1=event.clientX;
	y1=event.clientY;
	check(x1);
}

function move(event){
	x2=event.clientX;
	y2=event.clientY;
	if(area || out){
	document.getElementById("sidebar2").style.display="block";
	document.getElementById("sidebar2").style.left=-100+x2/w*100+"vw";
	//document.getElementById("mainscreen").innerHTML=-100+x2/w*100+"vw";
	document.getElementById("sidebar").style.left=-100+x2/w*100+"vw";
	document.getElementById("sidebar3").style.left=-20+x2/w*100+"vw";
	}
	calculate(x2);
}

function up(event){
	hide();
	document.removeEventListener("mousemove", move);
}

function mdown(event){
	document.addEventListener("touchmove",mmove);
	x1=Math.floor(event.touches[0].clientX);
	y1=Math.floor(event.touches[0].clientY);
	check(x1);
}
function mmove(event){
	x2=Math.floor(event.touches[0].clientX);
	y2=Math.floor(event.touches[0].clientY);
	if(area || out){
	document.getElementById("sidebar2").style.display="block";
	document.getElementById("sidebar2").style.left=-100+x2/w*100+"vw";
	//document.getElementById("mainscreen").innerHTML=-100+x2/w*100+"vw";
	document.getElementById("sidebar").style.left=-100+x2/w*100+"vw";
	document.getElementById("sidebar3").style.left=-20+x2/w*100+"vw";
	}
		
	calculate(x2);
}
function mup(event){
	hide();
	document.removeEventListener("touchmove", mmove);
}

function check(x1){
	//document.getElementById("cord").innerHTML=x2/w*100 +" "+(x1/w)*100;
	if(-100+x1/w*100<-80){
		area=true;
	}else{
		area=false;
	}
}

function calculate(x2){
	if(area || out){
	var side = document.getElementById("sidebar2");
	side.style.left= -100+x2/w*100+"vw";
	}
	
}

function hide(){
	if(area || out){
	var side = document.getElementById("sidebar2");
	var side2 = document.getElementById("sidebar");
	var side3 = document.getElementById("sidebar3");
	if(-100+x2/w*100<-30){
		side.style.left="-100vw";
		side2.style.left="-100vw";
		side3.style.left="-20vw";
		out=false;
	}else{
		side.style.left="0";
		side2.style.left="0";
		side3.style.left="80vw";
		out=true;
	}
	}
}