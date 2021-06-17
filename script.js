const history = document.getElementById("history");
const para = document.getElementById("result");
function add(){
    var a = +prompt("first value");
    var b=+prompt("second value");
    var add=a+b;
    para.textContent = ' Answer :'+" "+ (add);
    history.textContent = ' :'+" "+(a)+" "+ "+"+" " + (b);
}
function sub(){
    var a = prompt("first value");
    var b = prompt("second value");
    var sub=a-b;
    para.textContent = ' Answer :'+" "+ (sub);
    history.textContent = ' :'+" "+(a)+ " "+"-"+" " + (b);

}
function divide(){
    var a = prompt("first value");
    var b = prompt("Second value");
    var div=a/b;
    para.textContent = ' Answer :'+" "+ (div);
    history.textContent = ' :'+" "+(a)+ " "+"/"+" " + (b);


}
function mlt(){
    var a = prompt("first value");
    var b = prompt("Scond value");
    var mlt=a*b;
    para.textContent = ' Answer :'+" "+ (mlt);
    history.textContent = ' :'+" "+(a)+" "+ "x"+" " + (b);


}

/*para.addEventListener('click', updateName);

function updateName(){
    let name = prompt('Enter  Name');
    para.textContent = ' Name:'+" "+ name;
}*/