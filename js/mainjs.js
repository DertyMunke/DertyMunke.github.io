function changeText(index)
{
	if(index == 1){
		document.getElementById("titletext").innerHTML = "void JoelAbney::myLanguage()<br>{";
		document.getElementById("bodytext").innerHTML = 
			"The first language that I studied was C and then C++ soon after . It is the language" +
			"that I prefer, but lately, I have mostly been coding C# in Unity. "
	}
}

function expandButtons(className)
{
	var x = document.getElementsByClassName(className);
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}

function contractButtons(className)
{
	var x = document.getElementsByClassName(className);
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}