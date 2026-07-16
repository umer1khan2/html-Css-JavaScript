const inp = document.querySelector("input")
const para = document.querySelector("#input-text")
const sel = document.querySelector("select")
const h2 = document.querySelector("h2")

inp.addEventListener("input", function (dets) {
    para.innerHTML = `${dets.target.value}`
})

sel.addEventListener("change",function(dets){
    
    h2.innerText = `${dets.target.value} is selected `
    
})

