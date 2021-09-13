//getElementById = older
//querySelector = new, more powerful

document.querySelector("#myButton").onclick = function(){
    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");
    underline.innerText = "Welcome to my page!";
    h1.innerText = "";
    h1.append(underline);

    const paragraph = document.querySelectorAll(".myP");
    //paragraph[0].innerText = "Haaaaaa";
    paragraph.forEach(element => element.innerText = "whooaaa");

    const button = document.querySelector("#myButton");
    button.remove();
}