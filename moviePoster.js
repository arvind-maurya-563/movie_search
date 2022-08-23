let moviesList = [
    "https://image-resizer-cloud-api.akamaized.net/image/FFD5F949-E501-4229-9B53-795C5B42178E/0-3x1.jpg?width=1920",
    "https://image-resizer-cloud-api.akamaized.net/image/C6DE0F89-3C79-4E94-9324-913D1BA65563/0-3x1.jpg?width=1920",
    "https://image-resizer-cloud-api.akamaized.net/image/29EC91CB-23FD-49F7-8094-608D216E0231/0-3x1.jpg?width=1920",
    "https://image-resizer-cloud-api.akamaized.net/image/A2D5FA05-208D-45CC-9394-7AA4BEA8ED8F/0-3x1.jpg?width=1920",
    "https://image-resizer-cloud-api.akamaized.net/image/AB4E98DA-CAA5-48C0-81A8-DB20084EE026/0-3x1.jpg?width=1920",
    "https://image-resizer-cloud-api.akamaized.net/image/58873AFE-D16F-4ADD-8EA7-658462587A83/0-3x1.jpg?width=1920",
  ];
  let num = 1;
  let emageeliment = document.querySelector(".slider");
  setInterval(function(){
      if(num==moviesList.length){
          num = 0;
      }
    emageeliment.src= moviesList[num];
    num++;
  },2000);
 let sugestionEliment =  document.querySelector("#suggaestion");
 function displayMovie(data){
  document.querySelector("#MovieDetails").innerText = "";
  sugestionEliment.style.display = "none"
  sugestionEliment.innerHTML = "";
   let div = document.createElement("div");
   let img = document.createElement("img");
   img.src = data.Poster;
   let div2 = document.createElement("div");

   let name =  document.createElement("h3");
   name.innerText = "Movie Name:- "
   let namespan = document.createElement("span");
   namespan.innerHTML = data.Title;
   name.append(namespan)
   let Released = document.createElement("h3");
   let Releasedspan = document.createElement("span");
   Released.innerText = "Released :- "
   Releasedspan.innerText = data.Year;
   Released.append(Releasedspan);
   div2.append(name,Released);
   div.append(img,div2)
   let resultfound = document.createElement("p");
   resultfound.innerText = ("1 result found");
   document.querySelector("#MovieDetails").append(resultfound, div)
 }
 let timmer;
 const suggesion = ()=>{
    if(timmer){
      clearTimeout(timmer);
    }
    timmer = setTimeout(()=>{
     getMovieData();
    },1000)
 }
 const getMovieData = ()=>{
  let value = document.querySelector("#MovieName").value;
  let key = "ae75ba8b"
  let url = `http://www.omdbapi.com/?apikey=${key}&s=${value}`
  getdata(url);
 }
const getdata = async (url)=>{
  sugestionEliment.style.display = "none"
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.Search);
    showData_asSuggestion(data.Search)
  } catch (err) {
    // alert("no data found");
  }
}
 const showData_asSuggestion = (data_arr)=>{
  sugestionEliment.innerHTML = "";
  sugestionEliment.style.display = "flex"
     data_arr.forEach((movie) => {
        let pelimet = document.createElement("p");
        pelimet.innerText = movie.Title;
        pelimet.addEventListener("click",()=>{
          displayMovie(movie);
        })
        sugestionEliment.append(pelimet)
     }); 
 }
