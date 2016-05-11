function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "hasib" && password == "asd123") {
		alert("logged in successfully");
		window.location = "../pages/index.html";
	}
	else
		alert("please provide valid username or password");
}
