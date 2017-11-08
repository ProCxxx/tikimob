var cactiv="mainscreen";
var x1,x2,y1,y2;
var w = window.innerWidth;
var h = window.innerHeight;
var area = false;
var out = false;
var goutoready=true;
var loggedin=false;
var U;var PW;

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
		},90);
	},700);
}
function odr(){
	document.addEventListener("mousedown", down);
	document.addEventListener("mouseup", up);

	document.addEventListener("touchstart", mdown);
	document.addEventListener("touchend", mup);

	var lin = document.getElementById("loggedin");
	var lout = document.getElementById("loggedout");
	lin.style.display="none";
	lout.style.display="block";
	setInterval(function(){
		if(!loggedin){
			lin.style.display="none";
			lout.style.display="block";
		}else{
			lout.style.display="none";
			lin.style.display="block";
		}
	},1000)

}
function gouto(ajdi){
	if(goutoready){
	if(ajdi==cactiv) return false;
	out=false;
	goutoready=false;
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
				goutoready=true;

			}
		}
	},70);
	}
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
	if((!out &&(-100+x2/w*100<-70)) || (out && (-100+x2/w*100<-40)) ){
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

function contact(){
	var name = document.getElementById("cnt-name").value;
	var email = document.getElementById("cnt-mail").value;
	var msg = document.getElementById("cnt-msg").value;
	
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        if(this.responseText=="Succesfully sent"){
        	document.getElementById("cnt-name").value="";
			document.getElementById("cnt-mail").value="";
			document.getElementById("cnt-msg").value="";
        }
      }
    }
    xhttp.open('POST', 'https://pr0xy.000webhostapp.com/tikimob/contact.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('name='+name+'&email='+email+'&msg='+msg);
}


function register(){
	var name = document.getElementById("reg-name").value;
	var username = document.getElementById("reg-un").value;
	var pw1 = document.getElementById("reg-pw").value;
	var pw2 = document.getElementById("reg-pw2").value;
	var email = document.getElementById("reg-mail").value;
	
	
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        if(this.responseText=="Succesfully registered"){
        	gouto("login");
        	document.getElementById("reg-name").value="";
			document.getElementById("reg-un").value="";
			document.getElementById("reg-pw").value="";
			document.getElementById("reg-pw2").value="";
			document.getElementById("reg-mail").value="";
        }
      }
    }
    xhttp.open('POST', 'https://pr0xy.000webhostapp.com/tikimob/register.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('name='+name+'&email='+email+'&pw='+pw1+'&pw2='+pw2+'&user='+username);
}

function login(){
	var username = document.getElementById("log-un").value;
	var pw1 = document.getElementById("log-pw").value;
		
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        if(this.responseText=="Logged in successfully"){
        	loggedin=true;
        	document.cookie = "u="+username;
        	document.cookie = "upw="+upw(username,pw1);  
        	U=username;
        	PW=pw1;
        	gouto('profile');
        	document.getElementById("log-un").value="";
        	document.getElementById("log-pw").value="";
        }
      }
    }
    xhttp.open('POST', 'https://pr0xy.000webhostapp.com/tikimob/login.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('user='+username+'&pw='+pw1);
}

function optuser(){
	var name = document.getElementById("nejm").value;
	var uname = document.getElementById("juzernejm").value;
	var mail = document.getElementById("mejl").value;
		
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
      }
    }
    xhttp.open('POST', 'https://pr0xy.000webhostapp.com/tikimob/infochange.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('name='+name+'&uname='+uname+"&mail="+mail);
}

function optpw(){
	var oldpw = document.getElementById("old-pw").value;
	var pw1 = document.getElementById("new-pw").value;
	var pw2 = document.getElementById("new-pw-2").value;
		
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        if(this.responseText=="Password changed successfully"){
        	document.getElementById("old-pw").value="";
        	document.getElementById("new-pw").value="";
        	document.getElementById("new-pw-2").value="";
	}
      }
    }
    xhttp.open('POST', 'https://pr0xy.000webhostapp.com/tikimob/pwchange.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('opw='+oldpw+'&pw1='+pw1+"&pw2="+pw2);
}

 function upw(u1,pw1){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        return this.responseText;
    }
    xhttp.open('POST', 'https://pr0xy.000webhostapp.com/tikimob/upw.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('u='+u1+'&pw1='+pw1);
 }

 function logout(){
 	//delete U;
 	//delete PW;
 	loggedin=false;
 }
