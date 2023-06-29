var counter = 0;
var mousex = 0;
var mousey = 0;
var intro_mode = 0;
const intro_text = ["Interested in hiring a good web designer?", "Check out my designs and see if you would consider Benito.", "I call this one 'Blue Wave'"];
window.onload=function donenow(){
	var intro_ele = document.getElementById("intro");
	const banner_loop = setInterval( ()=> {
		let counter_tick = 700;
		if(counter == 0){
			intro_ele.innerText = intro_text[intro_mode];
			intro_mode++;
			if(intro_mode >= intro_text.length)
				intro_mode = 0;
			intro_ele.style.opacity="1.0";
		}
		if(counter == counter_tick)
			intro_ele.style.opacity="0.0";
		counter++;
		if(counter == counter_tick+300){
			counter = 0;
		}
	}, 10);
}