let numberPart = document.querySelector (".numberPart")

export let Num = function(){
    let fitsNum = Math.floor(Math.random()*100)

    let secNum = Math.floor(Math.random()*100)
    let treeNum = Math.floor(Math.random()*100)
    let foorNum = Math.floor(Math.random()*100)
    let x = document.createElement("div")
    x.classList.add("randoms")
    x.innerHTML = `<div>${fitsNum } <br> <h1>Happy Clients</h1>  </div> <br> <img src=./imgs/main-imgs/png1.png  <br>   <div>${secNum} <br> <h1>Project Done</h1>  </div>  <br> <img src=./imgs/main-imgs/png2.png  <br> <div>${treeNum } <br> <h1>Years Of Experince</h1> </div>  <br> <img src=./imgs/main-imgs/png3.png  <br> <div>${foorNum} <br> <h1>National Awards</h1>  </div>`

    numberPart.append(x)
}