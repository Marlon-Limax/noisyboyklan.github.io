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
			return;
		} else {
			return "usage include(url, callback, method)";
		}
	},
	urlArgs: function (url = window.location.href, separator = "?"){
		return url.substring(url.indexOf(separator)+1);
	}
}