// JavaScript source code
//methods
function greeting() {
    window.alert("Good morning!")
    document.getElementById("greeting").innerHTML = "And if I dont see ya"
    console.log("Good afternoon, good evening and good night")
}
function changeText() {

    let para = document.getElementById("new-para")

    if (para) {
        para.remove()
    } else {
        para = document.createElement("p")
        para.id = "new-para"
        let textNode = document.createTextNode(`With ${actor.getFullName()} as ${characters[0]}`)
        para.appendChild(textNode)
        document.getElementById("title-container").appendChild(para)
    }

}
//variables
let title = "WOW"
const releaseYear = 1998
//arrays and objects
const characters = []
characters.push("Nathan Bird") // or characters[0] = "Nathan Bird"

const actor = {} //basically just key:values
actor.firstName = "Jim"
actor.lastName = "Carrey"
actor.getFullName = function () {
    return this.firstName + " " + this.lastName
}
console.log(actor.getFullName())