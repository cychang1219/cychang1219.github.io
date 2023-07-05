//Reference: Lecture Video Week 14 Demo
//adjust font-size by clicking different letter A
document.getElementById("smallA").onclick = function()
{changeSize("small")};

document.getElementById("mediumA").onclick = function()
{changeSize("medium")};

document.getElementById("largeA").onclick = function()
{changeSize("large")};

function changeSize(c){
    document.getElementsByTagName("body")[0].className=c;
}