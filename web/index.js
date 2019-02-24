var moviename = ""

function getMovieName(movieName){
	let url = "http://localhost:3000/movies/name/"+movieName
	var filmData = ""
	fetch(url)
		.then(function(response){
			console.log(response)
			return response.json();
		})
		.then(function(myJson){
			filmData = myJson.name;
			console.log(filmData)
			console.log("AFDA")
		});
	
}