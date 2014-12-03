

//Simple jQuery spoiler.  Simply add the class "spoiler" to any objects you want hidden with a spoiler button.  
//Doesn't add any styling, except what is necessary for functionality.
	//That's your job anyway... no free lunch for you.  Now, leave me alone and get to work!

function addSpoiler (customSelector = ".spoiler", buttonClassList = "spoiler-button", buttonText = "Spoiler") {

	var buttondiv = '<button class="'+buttonClassList+'">'+buttonText+'</button>';
	$(customSelector).before(buttondiv);
	$(customSelector).toggle();
	var classSelector = buttonClassList;
	if (classSelector.indexOf(".") == -1) {
		classSelector = "." + buttonClassList;
	}
	classSelector.replace(" ", ".");
	console.log(classSelector);
	$(classSelector).click( function () {
		$(this).next().toggle();
	});
	
}
	
$(document).ready( 
	addSpoiler()

);