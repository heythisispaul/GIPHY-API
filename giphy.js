console.log("hello world!"); // checking to make sure it linked properly.

var animal = ["Swan", "Corgi", "Octopus", "Cheetah", "Fox"];
var apiKey = "dc6zaTOxFJmzC";

function displayAnimals() {
	var sAnimal = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + apiKey;
	var image = $("<img>");
	$.ajax({
		url: queryURL, //calls from the queryURL variable.
		method: "GET" 
	}).done(function(response) { //promises to wait until AJAX call is complete.
		console.log(response); //check to make sure it's grabbing the object.
		for (var j = 0; j < 10; j++) { //loops through response 10 times.
		var image = $("<img>"); //creates a variable to hold an image tag that will be generated on page.
		image.attr("data-animate", response.data[j].images.downsized_url); //adds the source url of the animated g
		image.attr("data-still", response.data[j].images.downsized_still_url);
		image.attr("gif-state", "animate");
		image.attr("src", response.data[j].images.fixed_height.url);
		image.addClass("gif");
		$("#gifView").prepend(image);
		renderButtons();
		}
	});
}

function renderButtons() {
	// Clears the buttondiv before redisplaying so no repeat buttons
	$("#buttonZone").empty();

	// loop through array of animals
	for (var i = 0; i < animal.length; i++) {
		//creates a variable that uses jquery to creat a button
		var a = $("<button>");
		a.addClass("animal");
		//Adds a data attribute holding where it is in the animal array.
		a.attr("data-name", animal[i]);
		//Displays the text of where it is in the animal array.
		a.text(animal[i]);
		// Adds it to the buttonZone div on the page.
		$("#buttonZone").append(a);
	}

}

renderButtons();
//when you click the "add an animal" button
$("#animalAdder").on("click", function(event){
	//Stops the default submit function.
	event.preventDefault();
	//Creates a variable that holds what text was entered in the input form on the page.
	var sAnimal = $("#animal-input").val().trim();
	//Adds that value to the animal array
	animal.push(sAnimal);
	console.log(sAnimal);
	$("#animal-input").val(" "); //empties the input text box.
	//refreshes all the buttons.
	renderButtons();

});

//Pause/Play on click any thing with "gif" class:
$(".gif").on("click", function(){
	var state = $(this).attr("gif-state"); //variable to hold the current state of the element - set to animate by default.
	//If the data state is "animate" when clicked switch to paused:
	if (state === "animate") {
		$(this).attr("src", $(this).attr("data-still")); //switch the source URL to still version.
		$(this).attr("gif-state", "still"); //change the state from defaulted animated to still.
		console.log("meow");
	} else { //if gif state is not set to animated:
		$(this).attr("src", $(this).attr("data-animate")); //switch this element to generate from the animated url.
		$(this).attr("gif-state", "animate"); //set its data state to animated.
		console.log("meow");
	}
});

$(document).on("click", ".animal", displayAnimals);