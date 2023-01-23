
document.getElementById("boton").addEventListener("click", function() {
    console.log("Hola world from EventListener");
    document.getElementById("demo3").innerHTML = "We are testing our 1st event"
});

document.getElementById("boton_color").addEventListener("click", function() {
    document.body.style.backgroundColor = "#FF0000"
})

document.getElementById("boton_default").addEventListener("click", function() {
    document.body.style.backgroundColor = "gray"
})

document.getElementById("boton_ocultar").addEventListener("click", function() {
    document.getElementById("demo3").style.display = "none"
})

const collection = document.getElementsByClassName("prueba")
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "yellow"
}