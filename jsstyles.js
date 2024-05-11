

//Get element by ID
console.log(h1)

console.log(h1.innerText) 
var index =0;
function changeColors(){
    var colors = ["red", "blue", "green", "yellow", "orange", "indigo", "pink", "gray", "violet", "purple", "burlywood", "brown"];

document.getElementsByTagName("body") [0].
style.background = colors[index++];

if(index > colors.length - 1)
index = 0;
}

var count = 0;
function changeCount(num){
    count += num;
    document.getElementById("count").innerHTML = count;
}