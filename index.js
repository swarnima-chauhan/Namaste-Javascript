//episode 14

//what is a Vallback function in JavaScript

setTimeout(function() {
    console.log("timer");
}, 5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
})


//JavaScript is a synchronous and single-threaded language

//Blocking the main thread

//Power of callback

//Deep about EventListeners

//Closures Demo with Event Listeners

//Scope Demo with Event Listeners

//Garbage Collection & removeEventListeners

//Garbage Collection & removeEventListeners

function attachEventListener(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked",++count);
    })
} 
attachEventListener();
