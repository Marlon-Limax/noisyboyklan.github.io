var HC = {
	include: function (url, callback, method = "get") {
		if(typeof callback=="function"){
			var ajax = new XMLHttpRequest();
			ajax.open(method.toUpperCase(), encodeURI(url), true);
			ajax.send();
			ajax.onreadystatechange = function() {
				if (ajax.readyState == 4 && ajax.status == 200) {
					var data = ajax.responseText;
					callback(data);
				}
			}
		} else {
			console.log("usage include(url, callback, method)");
		}
		return;
	},
	require: function(src, callback) {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = src;
		script.innerHTML = "";
		callback(script);
		return;
	},
	parseUrl: function (reqUrl = window.location.href){
		return new URL(reqUrl);
	}
}