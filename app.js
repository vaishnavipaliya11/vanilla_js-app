var btnConvert= document.querySelector("#btn-convert")
var txtInput = document.querySelector("#txt-input")

console.log(txtInput)

function clickHandler(){
    console.log("button got clicked!!")
    console.log("input",txtInput.value)
}

btnConvert.addEventListener("click", clickHandler)