document.querySelector("head").innerHTML = "<title>NoisyTech - Official Website</title>"+document.querySelector("head").innerHTML;
HC.include("./html/head.html", function(data){
	document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
});
HC.include("./html/indexContent.html", function(data){
	document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
});
HC.include("./html/footer.html", function(data){
	document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
});
