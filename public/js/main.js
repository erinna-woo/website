

function startFunction() {
	$("#first").fadeIn(2200); 
	$("#second").delay(1000).fadeIn(2200);
	$("#third").delay(2000).fadeIn(2200);
	$("#fourth").delay(3000).fadeIn(2200);
	$("#userInput").keyup(function(event){
	    if(event.keyCode == 13){
	    	//If enter is hit, simulate "enter" being clicked
	        $("#btnEnter").click();
    	}	
	});
	//Remove placeholder on focus. Bring back on blur. 
	$(function() {
	    $('input,textarea').focus(function () {
	        $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
	    }).blur(function () {
	        $(this).attr('placeholder', $(this).data('placeholder'));
	    });
	});
}
function userInput(){
	var userInputRaw = document.getElementById("userInput").value;
	var userInputCAP = userInputRaw.toUpperCase();

	newUserParagraph(userInputRaw,"user");
	setTimeout(responseOutput,800,userInputCAP);
	//Afterwards, clear the input
	$('#userInput').val('');
}

function responseOutput(text){

	if(text.includes("RESUME"))
	{
		newParagraph("Opening resume...")
		window.open("files/ErinnaWoo_Resume.pdf");
	}
	else if ((text.includes("HELP"))|| (text.includes("LS"))|| (text.includes("DIR")))
	{
		newParagraph("Available: resume, transcript, LinkedIn, GitHub, email, and art portfolio.");
		setTimeout('newParagraph("Type the query in the textbox below.")',1500);
	}
	else if(text.includes("WHO"))
	{
		newParagraph("My name is Erinna");
	}
	else if((text.includes("ART")) || (text.includes("PORTFOLIO"))) 
	{
		newParagraph("Opening portfolio...");
		// setTimeout('window.open("http://erinnawoo.myportfolio.com")',1500);
		window.open("http://erinnawoo.myportfolio.com");

	}
	else if(text.includes("LINKEDIN")) 
	{
		newParagraph("Opening LinkedIn...")
		window.open("https://www.linkedin.com/in/erinna-woo-452b87106");
	}
	else if(text.includes("MAIL")) 
	{
		newParagraph("My email is erinna.woo@pomona.edu");
	}
	else if(text.includes("OKAY")) 
	{
		newParagraph("okay");
	}
	else if((text.includes("YEAR")) || (text.includes("GRAD")))
	{
		newParagraph("I'm a junior, Class of '18.");
	}
	else if((text.includes("TRANSCRIPT")) || (text.includes("CLASSES")) || (text.includes("COURSE")) )
	{
		newParagraph("Opening transcript...")
		window.open("files/EWooUnofficialTranscript_SP17.pdf");
	}
	// else if((text.includes("BLOG")) || (text.includes("PROJECT"))) 
	// {
	// 	newParagraph("Opening projects blog...");
	// 	window.open("http://www.exitstairdown.wordpress.com");
	// }
	else if((text.includes("HELLO")) || (text.includes("HI "))) 
	{
		newParagraph("Hi there! What would you like to see?");
	}
	else if(text.includes("THANK"))
	{
		newParagraph("You're welcome");
	}
	else if(text.includes("BYE"))
	{
		newParagraph("Goodbye");
	}
	else if((text.includes("COOL"))|| (text.includes("AWESOME")))
	{
		newParagraph("Thanks");
	}
	else if(text.includes("GIT"))
	{
		newParagraph("Opening GitHub...")
		window.open("https://github.com/erinna-woo");
	}
	else if(text.includes("CHRIS")){
		newParagraph("Say hi to Chris!")
		window.open("http://www.chrisklusendorf.com");
	}
	else if(text.includes("SARAH")){
		newParagraph("Sarah Jin is #1")
		window.open("https://www.collegeswimming.com/swimmer/244010/");
	}	
	else if(text.includes("JEN JEN")){
		newParagraph("jen jen loves networks and graphs and german")
		window.open("http://research.pomona.edu/complexnetworks/author/jn012013/");
	}	
	else if((text.includes("JOKE"))|| (text.includes("FUNNY")))
	{
		newParagraph("Wait for it...")
		window.open("https://www.google.com/search?q=coding+joke&source=lnms&tbm=isch&sa=X&ved=0ahUKEwju0OGklbvOAhUT_WMKHapHB6kQ_AUICCgB&biw=1247&bih=632&dpr=2");
	}
	else
	{
		newParagraph("Please enter a valid request");
	}
}


function moveScroll(){
	var div = $('#mainDiv');
	 // $('html, body').animate({scrollTop:0}, 'slow');
	div.scrollTop(div.get(0).scrollHeight);
}

function newUserParagraph(text, user){
	//new user needs a separate function because 
	//I need to set the id of the paragraph when I create it 
	var hold = document.createElement("BR");
	document.getElementById("mainDiv").appendChild(hold);
	moveScroll()
	var par = document.createElement("P");
	var text = document.createTextNode(text);
	par.appendChild(text);
	par.setAttribute("id", user);
	document.getElementById("mainDiv").appendChild(par);
	document.getElementById("mainDiv").removeChild(hold);
	$("p").fadeIn(2200);
}

function newParagraph(text){
	var hold = document.createElement("BR");
	document.getElementById("mainDiv").appendChild(hold);
	moveScroll()
	var par = document.createElement("P");
	var text = document.createTextNode(text);
	par.appendChild(text);
	document.getElementById("mainDiv").appendChild(par);
	document.getElementById("mainDiv").removeChild(hold);
	$("p").fadeIn(2200);
}

function newBreak(){
	var br = document.createElement("BR");
	document.getElementById("mainDiv").appendChild(br);
}

//Polyfill to support Safari versions below 9 
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
