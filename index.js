//episode 14

//what is a Callback function in JavaScript

//JavaScript is a synchronous and single-threaded language

//Blocking the main thread

//Power of callback

//Deep about EventListeners

//Closures Demo with Event Listeners

//Scope Demo with Event Listeners

//Garbage Collection & removeEventListeners

function attachEventListener(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked",++count);
    })
} 
attachEventListener();
