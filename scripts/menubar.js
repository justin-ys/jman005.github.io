var xhr = new XMLHttpRequest();
xhr.open("GET", "menubar.html", true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) {
		document.getElementById('menubar').innerHTML = "Whoops! Looks like there was a problem loading the Menu Bar...";
	}
    document.getElementById('menubar').innerHTML = this.responseText;
	document.getElementById('menubar').setAttribute("style", "width: 22em; border-right: 1px solid black; margin-bottom: 1px; background-color: #d3d6db;");
	console.log(document.getElementById('menubar').innerHTML);
};
xhr.send();
