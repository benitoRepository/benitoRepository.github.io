var counter = 0;
var mousex = 0;
var mousey = 0;
var intro_mode = 0;
const intro_text = ["Interested in hiring a good web designer?", "Scroll down to check out my designs and see if you would consider Benito.", "I call this one 'Blue Wave'", "Blue Wave has a 2000's aesthetic style."];
var blind_count = 0;
var auto_reveal = true;
const banner_text = ["Helping businesses reach their customers through the web.", "Transforming Visual Concepts into Seamless Interactions.", "Crafting interfaces that captivate and drive."];
var image_count = 0;
const banner_images = ["url(assets/image1.jpeg)","url(assets/image2.jpeg)","url(assets/image3.jpeg)"];
window.onload=function donenow(){
	var intro_ele = document.getElementById("intro");
	var banner_curtain = document.getElementById("bannerBox");
	var topDiv = document.getElementById("curtainBox");
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
	
  	function revealPanel(){
  		setTimeout(() => {
    		topDiv.childNodes.forEach(function(topNode){
  				if (topNode.nodeType === 1) {
  					if(topNode.id == blind_count){
  						topNode.style.opacity = "0.0";
  					}
  					//if(blind_count == 10){
  						//topNode.style.opacity = "1.0";
  					//}
  				}
  			});
  			if(blind_count < 10){
  				blind_count++;
  				revealPanel();
  				//image_count++;
  				//console.log("url(image" + image_count + ".jpg)");
  				//setTimeout(() => {
  					//topDiv.style.backgroundImage = "url(image" + image_count + ".jpg)";
				//}, 500);
  				//if(image_count > 3)//it just works?
  				//image_count = 1;
  			}
  			else{
  				banner_curtain.style.opacity="1.0";
  				if(auto_reveal){
  					bannerPause();
  				}
  			}
  		}, 250);
  	}

  	function rebootPanels(){
  		topDiv.childNodes.forEach(function(topNode){
  			if(topNode.nodeType === 1){
  				topNode.style.opacity = "1.0";
  			}
  		});
  		blind_count = 0;
  	}

  	function bannerPause(){
  		setTimeout(()=>{
  			rebootPanels();
  			banner_curtain.style.opacity="0.0";
  			image_count++;
  			if(image_count > 2)
  				image_count = 0;
  			setTimeout(()=>{
  				banner_curtain.innerText = banner_text[image_count];
  				topDiv.style.backgroundImage = banner_images[image_count];
  				revealPanel();
  			}, 500);
  		}, 6000);
  	}

  	revealPanel();
}