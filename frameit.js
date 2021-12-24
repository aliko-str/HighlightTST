/*eslint-env browser*/


if(window !== window.top){
	if (document.readyState === "complete") {
		document.documentElement.style.border = "5px solid darkred";
	}else{
		window.addEventListener("load", ()=>{
			document.documentElement.style.border = "5px solid darkred";
		});
	}	
}


