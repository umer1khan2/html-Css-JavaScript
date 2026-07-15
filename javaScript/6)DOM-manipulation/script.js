// TARGETING ELEMENTS BY ID , CLASS AND QUERY SELECTOR

// query selector
// It will only select the first id,class or tag , and neglect the remaining

const heading1 = document.querySelector("#div-1-heading")

// There are 3 different ways of changing the inner text content of an element

// 1st way
heading1.textContent = "first way" 

// 2nd way
heading1.innerHTML = "second way"

// 3rd way
heading1.innerText = "third way"


// query selectorALL
// If you use querySelectorAll it will select all the elements with the same class/tag

const divHeading = document.querySelectorAll(".div-heading")
divHeading.forEach((val)=>{
    val.textContent = "Query Selector All"
})

// Get Elements by Class

const li = document.getElementsByClassName("list")

for (let i = 0; i < li.length ; i++ ){
    li[i].textContent = "content"
}


// Get element by id and creating new element in it

const div3 = document.getElementById("div-3")
const picture = document.createElement("img")
picture.setAttribute("src" , "https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
picture.setAttribute("alt" , "Google image")

div3.append(picture)


const para = document.createElement("p")
para.textContent = "helloooo , hiiiiiiiiiiiiii , hiiiiiiiiiiiiiiiiiiiiiii"
div3.prepend(para)
// prepend add at the top of the targeted element and append at the bottom.

// Adding style through dom
div3.style.backgroundColor = "red"
div3.style.color = "white"

console.dir(div3);
