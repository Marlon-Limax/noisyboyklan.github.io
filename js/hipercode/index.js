HC.include("./html/head.html", function(data){
	document.querySelector("body").append(new DOMParser().parseFromString(data, "text/html"););
});