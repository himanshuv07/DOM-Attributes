let h1 = document.querySelector("h1");
let p = document.querySelector("p");

h1.setAttribute("title","JAVASCRIPT");
p.setAttribute("class","demo");

let user = document.querySelector("#username");
let pass = document.querySelector("#password");

user.setAttribute("placeholder","Enter username");
pass.setAttribute("placeholder","Enter password");

// !uncaught typeError: failed to execute 'setAttribute' on element : 2 arguments required , but only 1 present.

user.setAttribute("required","");
pass.setAttribute("required","");

// let type = pass.getAttribute("type");
// console.log(type);

let type = pass.getAttribute("class");
// console.log(type);

h1.removeAttribute("style");

let r1 = user.hasAttribute("required");
console.log(r1);
console.log(p.hasAttribute("title"));

let nL = document.querySelectorAll("h1");
// for(let i = 0; i<nL.length;i++){
//     nL[i].removeAttribute("style");
// }

[...nL].map((v)=>{
    v.removeAttribute("style");
});