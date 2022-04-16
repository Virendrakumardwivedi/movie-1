

// document.getElementById("submit").addEventListener("click",fun)


// async function fun(){
// try{
//     let search = document.querySelector("#movie").value
//     let result = await fetch(`https://www.omdbapi.com/?&apikey=8b11dcbf&s=${search}`);

//     let data=await result.json();
//     console.log(data);
//     print(data.search)
// }
// catch (err){
//     console.log("error",err)
// }
// }
document.getElementById("submit").addEventListener("click",searchMovies)

function searchMovies(){
    let search = document.getElementById("movie").value;

    const url = (`https://www.omdbapi.com/?&apikey=8b11dcbf&s=${search}`);
    
    fetch(url)
    .then(function(res){
        return (res.json());
    })
    .then(function(res){
        if(res.Response=="False")
        {
            errpor1(res)
        }
        else{
            console.log('FINAL RESPONSE: ',res.Search)
            print(res.Search);
        }
    })
    .catch(function(err){
        console.log(err);
    });
    
}

function print(data)
{
    document.createElement("container").innerHTML=null;
    data.map(function(el){
    let box=document.createElement("div");
    let img =document.createElement("img");
    img.src=el.Poster;
   
    let date = document.createElement("p");
    date.innerHTML=el.Year;
    
  
    let title =document.createElement("p");
    title.innerText=el.Title;
   
    let tag1=document.createElement("div");
     tag1.setAttribute("class","tag1")

    let imbdID= document.createElement("p");
    imbdID.innerHTML=el.imdbID;

      if(el.imbdID>8.5)
      {
         tag1.append(imbdID,tag1)
         box.append(img, date, title, imbdID)
         let ground = document.querySelector('#ground');
         ground.append(box)
      }
      else{
        box.append(img, date, title, imbdID,tag1)
        let ground = document.querySelector('#ground');
        ground.append(box)
      }

    // box.append(img, date, title, imbdID)
    // let ground = document.querySelector('#ground');
    // ground.append(box
  
});
}

