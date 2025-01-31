document.addEventListener("DOMContentLoaded", function() {
    var circle = document.querySelector("#circle");
    var main = document.querySelector("#main");
    var loader = document.querySelector("#loader");

    circle.addEventListener("click", function() {
        main.style.display = "none";
        loader.style.display = "block";
    });
});

var cursor = document.querySelector("#cursor");
var loader = document.querySelector("#loader");
var h1 = document.querySelector("#nav h1");

loader.addEventListener("mousemove" ,function(dets){
     cursor.style.left = dets.x + "px";
     cursor.style.top = dets.y + "px";
})

h1.addEventListener("mouseenter", function(){
    cursor.style.scale = "3";
    cursor.style.backgroundColor = "#CA4F6B";
})

h1.addEventListener("mouseleave",function(){
    cursor.style.scale = "1";
    cursor.style.backgroundColor = "#1955EB";
})

var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");

box1.addEventListener("mouseenter",function(){
    cursor.style.scale ="4";
    cursor.style.backgroundColor = "white";
    cursor.style.fontSize = "3px";
    cursor.style.cursor="none";
})

box1.addEventListener("mouseleave",function(){
    cursor.style.scale ="1";
    cursor.style.backgroundColor = "#1955EB";
    cursor.style.fontSize = "0px";
    cursor.style.cursor="auto";
})

box2.addEventListener("mouseenter",function(){
    cursor.style.scale ="4";
    cursor.style.backgroundColor = "white";
    cursor.style.fontSize = "3px";
    cursor.style.cursor="none";
})

box2.addEventListener("mouseleave",function(){
    cursor.style.scale ="1";
    cursor.style.backgroundColor = "#1955EB";
    cursor.style.fontSize = "0px";
    cursor.style.cursor="auto";
})

box3.addEventListener("mouseenter",function(){
    cursor.style.scale ="4";
    cursor.style.backgroundColor = "white";
    cursor.style.fontSize = "3px";
    cursor.style.cursor="none";
})

box3.addEventListener("mouseleave",function(){
    cursor.style.scale ="1";
    cursor.style.backgroundColor = "#1955EB";
    cursor.style.fontSize = "0px";
    cursor.style.cursor="auto";
})

box4.addEventListener("mouseenter",function(){
    cursor.style.scale ="4";
    cursor.style.backgroundColor = "white";
    cursor.style.fontSize = "3px";
    cursor.style.cursor="none";
})

box4.addEventListener("mouseleave",function(){
    cursor.style.scale ="1";
    cursor.style.backgroundColor = "#1955EB";
    cursor.style.fontSize = "0px";
    cursor.style.cursor="auto";
})

box5.addEventListener("mouseenter",function(){
    cursor.style.scale ="4";
    cursor.style.backgroundColor = "white";
    cursor.style.fontSize = "3px";
    cursor.style.cursor="none";
})

box5.addEventListener("mouseleave",function(){
    cursor.style.scale ="1";
    cursor.style.backgroundColor = "#1955EB";
    cursor.style.fontSize = "0px";
    cursor.style.cursor="auto";
})