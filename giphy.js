console.log("hello world!"); // checking to make sure it linked properly.

var animal = ["Swan", "Corgi", "Octopus", "Cheetah", "Fox"];
var apiKey = "dc6zaTOxFJmzC";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + apiKey;

$.ajax({
	url: queryURL, //calls from the queryURL variable.
	method: "GET" 
}).done(function(response) { //promises to wait until AJAX call is complete.
	console.log(response); //check to make sure it's grabbing the object.
})


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

$("#animal-input").on("click", function(event){
	//Stops the default submit function.
	event.preventDefault();
	//Creates a variable that holds what text was entered in the input form on the page.
	var sAnimal = $("animal-input").val();
	//Adds that value to the animal array
	animal.push(sAnimal);
	console.log(sanimal);

})

renderButtons();