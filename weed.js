window.onload=function donenow(){
	var divbody = document.getElementById("consumer-box");
	var businessbody = document.getElementById("industry-box");
	var legalbody = document.getElementById("industry-box2");
	var connectbody = document.getElementById("industry-box3");
	//consumer box settings
	divbody.addEventListener("mouseenter", function(){
		document.getElementById("consumer-pin").setAttribute("src", "triangle-pinner.png");
		this.style.backgroundColor = "#247c65";
		for(const child of this.children )
			child.style.backgroundColor = "#247c65";
	});
	divbody.addEventListener("mouseout", function(){
		//console.log(event.clientX+" and "+divbody.left);
		var dimen = this.getBoundingClientRect();
		if (event.clientX < dimen.left || event.clientX > dimen.right || event.clientY < dimen.top || event.clientY > dimen.bottom){
      		document.getElementById("consumer-pin").setAttribute("src", "circle-pinner.png");
      		this.style.backgroundColor = "#1c4941";
			for(const child of this.children )
				child.style.backgroundColor = "#1c4941";
		}
	});
	//business box settings
	businessbody.addEventListener("mouseenter", function(){
		document.getElementById("business-pin").setAttribute("src", "triangle-pinner.png");
		this.style.backgroundColor = "#247c65";
		for(const child of this.children )
			child.style.backgroundColor = "#247c65";
	});
	businessbody.addEventListener("mouseout", function(){
		//console.log(event.clientX+" and "+divbody.left);
		var dimen = this.getBoundingClientRect();
		if (event.clientX < dimen.left || event.clientX > dimen.right || event.clientY < dimen.top || event.clientY > dimen.bottom){
      		document.getElementById("business-pin").setAttribute("src", "circle-pinner.png");
      		this.style.backgroundColor = "#1c4941";
			for(const child of this.children )
				child.style.backgroundColor = "#1c4941";
		}
	});
	//legal box settings
	legalbody.addEventListener("mouseenter", function(){
		document.getElementById("legal-pin").setAttribute("src", "triangle-pinner.png");
		this.style.backgroundColor = "#247c65";
		for(const child of this.children )
			child.style.backgroundColor = "#247c65";
	});
	legalbody.addEventListener("mouseout", function(){
		//console.log(event.clientX+" and "+divbody.left);
		var dimen = this.getBoundingClientRect();
		if (event.clientX < dimen.left || event.clientX > dimen.right || event.clientY < dimen.top || event.clientY > dimen.bottom){
      		document.getElementById("legal-pin").setAttribute("src", "circle-pinner.png");
      		this.style.backgroundColor = "#1c4941";
			for(const child of this.children )
				child.style.backgroundColor = "#1c4941";
		}
	});
	//connections box settins
	connectbody.addEventListener("mouseenter", function(){
		document.getElementById("connections-pin").setAttribute("src", "triangle-pinner.png");
		this.style.backgroundColor = "#247c65";
		for(const child of this.children )
			child.style.backgroundColor = "#247c65";
	});
	connectbody.addEventListener("mouseout", function(){
		//console.log(event.clientX+" and "+divbody.left);
		var dimen = this.getBoundingClientRect();
		if (event.clientX < dimen.left || event.clientX > dimen.right || event.clientY < dimen.top || event.clientY > dimen.bottom){
      		document.getElementById("connections-pin").setAttribute("src", "circle-pinner.png");
      		this.style.backgroundColor = "#1c4941";
			for(const child of this.children )
				child.style.backgroundColor = "#1c4941";
		}
	});


}


/*function changeConsumerSym(){
	document.getElementById("header_top")
}*/