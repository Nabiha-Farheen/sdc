
async function searchMovie() {
    let name = document.getElementById("movie").value;
    let key = "86ee4a0e";

    let response = await fetch(
        `https://www.omdbapi.com/?t=${name}&apikey=${key}`
    );

    let data = await response.json();

    document.getElementById("result").innerHTML =
    data.Response === "True"
    ? `<h3>${data.Title}</h3>
       Year: ${data.Year}<br>
       Rating: ${data.imdbRating}`
    : data.Error;
}