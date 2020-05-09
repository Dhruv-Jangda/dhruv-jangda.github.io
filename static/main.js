function collapsePane() {
	document.getElementById("sidebar").style.width = "0px";
	document.getElementsByClassName("main")[0].style.marginLeft = "30px";
	document.getElementsByClassName("sidepane-control left-symbol")[0].style.display = "none";
	var rightSymbol = document.getElementsByClassName("sidepane-control right-symbol")[0];
	rightSymbol.style.marginLeft = "-68px";
	rightSymbol.style.display = "block";
}

function expandPane() {
	document.getElementById("sidebar").style.width = "250px";
	document.getElementsByClassName("main")[0].style.marginLeft = "270px";
	document.getElementsByClassName("sidepane-control left-symbol")[0].style.display = "block";
	document.getElementsByClassName("sidepane-control right-symbol")[0].style.display = "none";
}
