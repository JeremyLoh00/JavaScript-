document.querySelector("#myButton").onclick = function(){
    const h1 = document.querySelector("#myH1");

    console.log(h1.style); //can see all style that can modify in console

    h1.style.color = "blue";
    h1.style.backgroundColor = "black";
    h1.style.border = "5px solid";
    h1.style.textAlign = "center";
    h1.style.fontFamily = "consolas";
    h1.style.borderColor = "yellow";
}