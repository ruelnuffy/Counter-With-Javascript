let saveEl =  document.getElementById("total")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}
function decrement(){
    count -=  1
    countEl.innerText = count
}
function save(){


    let countstr =  count + " - "

 saveEl.innerText += countstr
countEl.innerText=0
return count=0 
}