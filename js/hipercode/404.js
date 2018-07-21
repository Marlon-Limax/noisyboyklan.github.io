HC.include("./html/404.html", function(data){
	document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
});