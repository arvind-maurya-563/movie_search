let container = document.getElementById("container");
const displyData = (dataarr)=>{
    dataarr.forEach(element => {
       let div = document.createElement("div");
       let img = document.createElement("img");
       let title = document.createElement("h4");
       let realeasdate = document.createElement("p");
       let rating = document.createElement("p");
       let div2 = document.createElement("div");
       div2.className = "name&title"
       img.src= `https://image.tmdb.org/t/p/w220_and_h330_face/${element.poster_path}`;
       title.textContent = `Title : ${element.title}`
       realeasdate.innerText = `Released : ${element.release_date}` 
       rating.innerText = `Rating : ${element.vote_average}/10`
       div2.append(realeasdate,rating);
       div.append(img,title,div2)
       container.append(div)
    });
}
const getData = async()=>{
    try {
       let res = await fetch(`https://api.themoviedb.org/4/list/1?api_key=00dcb083617b34a5a13543e123682a0c`);
       let data = await res.json();
      displyData(data.results);
    } catch (error) {
       console.log(error) 
    }
}
getData();