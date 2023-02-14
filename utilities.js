
function opacity_filp_header(){
	var header = document.getElementById("cannareach_header");
	var headerRect = header.getBoundingClientRect();
	var n = Number(header.style.opacity);
	if(event.clientX < headerRect.left || event.clientX > headerRect.right || event.clientY < headerRect.top || event.clientY > headerRect.bottom){
		setInterval(function () {
			if(n<=0.0){
				clearInterval();
			}else{
				n -= 0.01;
				header.style.opacity=n;
			}
		}, 10);
	}
	else{
		setInterval(function () {
			if(n>=1.0){
				clearInterval();
			}else{
				n += 0.01;
				header.style.opacity=n;
			}
		}, 10);
	}
}