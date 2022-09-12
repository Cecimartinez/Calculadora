const displayValorAnt = document.getElementById("val-ant");
const displayValorAct = document.getElementById("val-act");
const numberButton = document.querySelectorAll(".number");
const OperadorButton = document.querySelectorAll(".operador");
let display = new Display(displayValorAnt, displayValorAct);

const btn0 = document.getElementById("number0");
btn0.addEventListener("click", agregarNumero)

//displayValorAct.addEventListener("change", (e)=> console.log(e));

const btn1 = document.getElementById("number1");
btn1.addEventListener("click", agregarNumero);

const btn2 = document.getElementById("number2");
btn2.addEventListener("click", agregarNumero);

const btn3 = document.getElementById("number3");
btn3.addEventListener("click", agregarNumero);

const btn4 = document.getElementById("number4");
btn4.addEventListener("click", agregarNumero);

const btn5 = document.getElementById("number5");
btn5.addEventListener("click", agregarNumero);

const btn6 = document.getElementById("number6");
btn6.addEventListener("click", agregarNumero);

const btn7 = document.getElementById("number7");
btn7.addEventListener("click", agregarNumero);

const btn8 = document.getElementById("number8");
btn8.addEventListener("click", agregarNumero);

const btn9 = document.getElementById("number9");
btn9.addEventListener("click", agregarNumero);

//operadoresMatematicos
const sumar = document.getElementById("sumar");
sumar.addEventListener("click", agregarSimbolo);

const restar = document.getElementById("restar");
restar.addEventListener("click", agregarSimbolo);

const divir = document.getElementById("divir");
divir.addEventListener("click", agregarSimbolo);

const mult = document.getElementById("mult");
mult.addEventListener("click", agregarSimbolo);


//decimal
const decimal = document.getElementById("decimal");
decimal.addEventListener("click", agregarNumero);

//igual
const igual = document.getElementById("igual");
igual.addEventListener("click", resultado);

function agregarNumero({ target }) {
  console.log(target.value);
  display.agregarNum(target.value);
}
function agregarSimbolo({ target }) {
  console.log(displayValorAct.innerHTML);
  if (displayValorAct.innerHTML.length < 1) return;
  display.agregarNum(target.value);
}

function resultado (){
  display.calcular();
}

 
