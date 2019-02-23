

function get_movie_name(movieName){
	let url = concat("http://localhost:3000/movies/name/",movieName)
	var filmData = ""
	fetch(url)
		.then(function(response){
			return response.json();
		})
		.then(function(myJson)){
			filmData = myJson.name
		}
	
}