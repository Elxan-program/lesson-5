let container=document.getElementById("container");

// console.log(container.firstChild.nextSibling.textContent);

let h=document.getElementById("h2");
h.addEventListener("mouseover",myfoo);
h.addEventListener("mouseout",myfoo2);

function myfoo(){
    let pre=h.previousElementSibling;
    let next=h.nextElementSibling;
    let doublenext = next.nextElementSibling;
    pre.style.opacity=0.5;
    next.style.opacity=0.5;
    doublenext.style.opacity=0.5;
    pre.style.fontSize = '2em';
    next.style.fontSize = '2em';
    doublenext.style.fontSize = '2em';
    //  pre.style.color="red";
    //  next.style.color="green";
}
function myfoo2(){

    let pre=h.previousElementSibling;
    let next=h.nextElementSibling;
    let doublenext = next.nextElementSibling;
    pre.style.opacity=1;
    next.style.opacity=1;
    doublenext.style.opacity=1;
    pre.style.fontSize = '5em';
    next.style.fontSize = '5em';
    doublenext.style.fontSize = '5em';
    //  pre.style.color="red";
    //  next.style.color="green";
}


let a=document.getElementById("a1");
a.addEventListener("mouseover",myfunc);
a.addEventListener("mouseout",myfunc2);

function myfunc(){
    let next=a.nextElementSibling;
    let dnext=next.nextElementSibling;
    let trnext=dnext.nextElementSibling;
    next.style.opacity=0.5;
    dnext.style.opacity=0.5;
    trnext.style.opacity=0.5;
    next.style.fontSize = '2em';
    dnext.style.fontSize = '2em';
    trnext.style.fontSize = '2em';
}
function myfunc2(){

    let next = a.nextElementSibling;
    let dnext=next.nextElementSibling;
    let trnext=dnext.nextElementSibling;
    next.style.opacity = 1;
    dnext.style.opacity = 1;
    trnext.style.opacity = 1;
    next.style.fontSize = '5em';
    dnext.style.fontSize = '5em';
    trnext.style.fontSize = '5em';
}


let b=document.getElementById("b1");
b.addEventListener("mouseover",bmuoseover);
b.addEventListener("mouseout",bmuoseout);


function bmuoseover(){
    let pre=b.previousElementSibling;
    let doublepre = pre.previousElementSibling;
    let next=b.nextElementSibling;
    pre.style.opacity=0.5;
    doublepre.style.opacity=0.5;
    next.style.opacity=0.5;
    pre.style.fontSize = '2em';
    doublepre.style.fontSize = '2em';
    next.style.fontSize = '2em';
}

function bmuoseout(){
    let pre=b.previousElementSibling;
    let doublepre = pre.previousElementSibling;
    let next=b.nextElementSibling;
    pre.style.opacity=1;
    doublepre.style.opacity=1;
    next.style.opacity=1;
    pre.style.fontSize = '5em';
    doublepre.style.fontSize = '5em';
    next.style.fontSize = '5em';
}