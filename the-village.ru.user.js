// ==UserScript==
// @name        the-village.ru
// @namespace   http://the-village.ru
// @include     http://the-village.ru/*
// @grant       none
// @run-at      document-end
// @version     0.1.2
// @downloadURL https://github.com/bondden/a3b-the-village.ru/raw/master/the-village.ru.user.js
// @updateURL   https://github.com/bondden/a3b-the-village.ru/raw/master/the-village.ru.user.js
// ==/UserScript==

//execute, when DOM is ready
function bondden_gInit(){
	
	//1. remove Anti adBlock banner and button
	var xcfd=document.getElementsByClassName('row-adblock-message').item(0);
	if(xcfd)xcfd.parentNode.removeChild(xcfd);

}

var bondden_gRi = setInterval(function(){
	if(document.readyState==="complete"){
		bondden_gInit();
		clearInterval(bondden_gRi);
	}
},10);