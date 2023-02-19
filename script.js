let next =document.getElementById("load-next");
let prev =document.getElementById("load-prev");
let page =document.getElementById("page");
let list =document.getElementById("issues");
let recentPage=1;
let issuesper_page=5;


function githubApi(recentPage){

    fetch(`https://api.github.com/repositories/1296269/issues?page=${recentPage}&per_page=${issuesper_page}`)
    .then(response=>response.json())
    .then(data=>{
        list.innerHTML = " ";
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].title);
        
        list.innerHTML += `<li>${data[i].title}</li>`;
      }
    });
    page.innerHTML=` Page Number : ${recentPage}`
}
next.addEventListener('click', ()=>{
    
    recentPage++;
    githubApi(recentPage)
})

prev.addEventListener('click', ()=>{
    
    if (recentPage > 1) {
        recentPage--;
    githubApi(recentPage);
      }
})