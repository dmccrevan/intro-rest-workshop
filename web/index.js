
//Function that gets movie based on its name
function getMovieName(){
	var movieName = document.getElementById("movie").value
	let url = "http://localhost:3000/movies/name/"+movieName
	
	var filmData = ""
	fetch(url)
		.then(function(response){
			return response.json();
		})
		//Goes here if actual response is generated
		.then(function(myJson){
			//To show this exsits in the database show some message
			document.getElementById("newfilm").innerHTML =  "We have "+myJson.name+"; it's rated: "+myJson.rating.toString()+"."	
		})
		//Goes in here if an error code is thrown
		.catch((error) =>{
			document.getElementById("newfilm").innerHTML = "We don't have: "+movieName+"."
		});	
}

//TODO: Write rest of API functions 

//Write a function that gets the first movie greater than a certain movie rating
function getByRating(){

}

//Write a function to get the genre of a movie

function getMovieGenre(){

}

//Write a function that will delete a movie 

function deleteMovie(){

}

//Write a function that will add a new movie and rating to the database