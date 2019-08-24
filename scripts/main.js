

// cover photo change by a mouseclick

var myImage = document.querySelector('img');

myImage.onmouseenter = function(){

	var mySrc = myImage.getAttribute('src');
	if (mySrc === '../images/cover.png'){
		myImage.setAttribute('src', '../images/cover2.png');
	}else {
		myImage.setAttribute('src', '../images/cover.png');
	}

}


// customize a button for users


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){

	var userName = prompt('Please enter your name.');
	localStorage.setItem('name', userName);
	myHeading.innerHTML = "Hi, I'm YUCHI LUO.\n\r"+ " Welcome, "+ userName + "!";

}
	/*
	if (!localStorage.getItem('name')){
		setUserName();
	} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = "Hi, I'm YUCHI.\n\r"+ " Welcome Back, "+ storedName + "!";
	}
	*/

myButton.onclick = function(){
	setUserName();
}

