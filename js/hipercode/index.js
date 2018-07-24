document.querySelector("head").innerHTML = "<title>NoisyTech - Official Website</title>"+document.querySelector("head").innerHTML;
function content(n = 0){
	switch(n){
		case 0:
			HC.include("./html/header.html", function(data){
				document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
			});
			break;
		case 1:
			HC.include("./html/indexContent.html", function(data){
				document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
			});
			break;
		case 2:
			HC.include("./html/footer.html", function(data){
				document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
			});
			break;
		default:
			return;
	}
	content(n++);
}
