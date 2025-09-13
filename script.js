let apiKey="25398bd4"

function search(){
    let inputTag = document.getElementById("movieInputTag")
    let movieTitile = inputTag.value
    let url  = "http://www.omdbapi.com/?apikey="+apiKey+"&t="+movieTitile

    let httpRequest = new XMLHttpRequest()
    httpRequest.open("GET",url)
    httpRequest.responseType = "json"

    httpRequest.onload = function(){
        let movie = httpRequest.response
        console.log(movie)  
        let titleTag = document.getElementById("title")
        titleTag.innerHTML = movie.Title
        let yearTag = document.getElementById("year")
        yearTag.innerHTML = movie.Year
        let posterTag = document.getElementById("poster")
        posterTag.src = movie.Poster
        let plotTag = document.getElementById("plot")
        plotTag.innerHTML = movie.Plot
        let genreTag = document.getElementById("genre")
        genreTag.innerHTML = movie.Genre

        let runtimeTag = document.getElementById("runtime")
        runtimeTag.innerHTML = movie.Runtime

        let directorTag = document.getElementById("director")
        directorTag.innerHTML = movie.Director

        let writerTag = document.getElementById("writer")
        writerTag.innerHTML = movie.Writer

        let actorsTag = document.getElementById("actors")
        actorsTag.innerHTML = movie.Actors

        let languageTag = document.getElementById("language")
        languageTag.innerHTML = movie.Language

        let countryTag = document.getElementById("country")
        countryTag.innerHTML = movie.Country

        let awardsTag = document.getElementById("awards")
        awardsTag.innerHTML = movie.Awards

        let boxofficeTag = document.getElementById("boxoffice")
        boxofficeTag.innerHTML = movie.BoxOffice

        let imdbRatingTag = document.getElementById("imdbRating")
        imdbRatingTag.innerHTML = movie.imdbRating

       
    }

    httpRequest.send()
}