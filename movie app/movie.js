$(document).ready(() => {
    $("#searchForm").on('submit', e => {
e.preventDefault();

let searchText = $("#searchText").val();
getMovies(searchText);

    });
});

let apikey = '67edb4e2';
let url = 'http://www.omdbapi.com/?apikey='+apikey;


const getMovies = searchText => {
    axios.get(url + '&s=' + searchText)
    .then(data => {
       let movies = data.data.Search;
       let output = '';
      $.each(movies,(index,movie) => {
          output += `
          <div class = "col-md-3"> 
          <div class = "well text-center">
          <img src = '${movie.Poster}' class = "img-fluid">
          <h5>${movie.Title}</h5>
          <a onclick = "movieSelected('${movie.imdbID}')" class = "btn btn-primary"  href="#">Movie Details</a>
          </div>
          </div>`;
      });
      $("#movies").html(output);
      
      
    })
    .catch(err => {
        console.log(err);
    });
};

function movieSelected(id){
    sessionStorage.setItem('movieId',id);
    window.location = 'movie.html';
    return false;

}

function getMovie(){
    let getId = sessionStorage.getItem('movieId');
    axios.get(url + '&i=' + getId)
    .then(data => {
      let movie = data.data;
      let output = `
      <div class = "row">
      <div class = "col-md-4">
      <img src = "${movie.Poster}">
      </div>
<div class = "col-md-8">
<h2>${movie.Title}</h2>
<ul class = "list-group">
<li class = "list-group-item"><strong>Genre:</strong>${movie.Genre} </li>
<li class = "list-group-item"><strong>Released:</strong>${movie.Released} </li>
<li class = "list-group-item"><strong>Rated:</strong>${movie.Rated} </li>
<li class = "list-group-item"><strong>IMDB Rating:</strong>${movie.imdbRating} </li>
<li class = "list-group-item"><strong>Director:</strong>${movie.Director} </li>
<li class = "list-group-item"><strong>Writer:</strong>${movie.Writer} </li>
<li class = "list-group-item"><strong>Actors:</strong>${movie.Actors} </li>

</ul>
</div>
</div>
<hr>
<div class = "row">
<div class = "well">
<h2>${movie.Plot}</h2>
<hr>
<a href = "http://imdb.com/title/${movie.imdbID}" target = "_blank" class = "btn btn-primary">View</a>
<a href = "index.html"class = "btn btn-success">Go back to search</a>
</div>
</div>

      `;
      $("#movie").html(output);
    })
    .catch(err => {
        console.log(err);
    });

}
