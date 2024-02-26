document.getElementById("EnterButton").onclick=function(){
    var name=prompt("Enter your name here: ");
    if (name!null && name!=""){
    document.getElementById("myname").innerHTML="Welcome" + name;
}
};

img=document.getElementById("meimg");
function bigimg() {
img.style.transform="scale(1.5)";}