document.querySelector("head").innerHTML = "<title>NoisyTech - Official Website</title>"+document.querySelector("head").innerHTML;
function generateContent(n){
	switch(n){
		case 0:
			HC.include("./html/header.html", function(data){
				document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
				generateContent(n+1);
			});
			break;
		case 1:
			HC.include("./html/indexContent.html", function(data){
				document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
				generateContent(n+1);
			});
			break;
		case 2:
			HC.include("./html/footer.html", function(data){
				document.querySelector("body").innerHTML = document.querySelector("body").innerHTML+data;
				generateContent(n+1);
			});
			break;
		default:
			return;
			break;
	}
}
generateContent(0;
