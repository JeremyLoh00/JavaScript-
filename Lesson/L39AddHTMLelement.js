const h1 = document.createElement("h1");           // create an element in html
const underline = document.createElement("u");
underline.innerText = "Hello World!";               //type text in the underline <u> </u>
h1.append(underline);                               //append (means add) the underline element inside h1
document.body.append(h1);                           //append h1 inside the body of the html doc

const h2 = document.createElement("h2");
const bold = document.createElement("b");
bold.innerText = "Welcome to my page!!!";
h2.append(bold);
document.body.append(h2);

const paragraph = document.createElement("p");
const italic = document.createElement("i");
italic.innerText = "This is about js and html!";
paragraph.append(italic);
document.body.append(paragraph);