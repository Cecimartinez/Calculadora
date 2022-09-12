class Display {
  constructor(displayValorAnt, displayValorAct) {
    this.displayValorAct = displayValorAct;
    this.displayValorAnt = displayValorAnt;
    //this.Calculadora = new Calculadora;
    this.valorActual = new String();
    this.valorAnterior = "";
    this.operacion = undefined;
  }

  agregarNum(number) {

    if (number === "." && this.valorActual.includes(".")) return
    this.valorActual += number;
    this.mostrarValores();
  }
  mostrarValores() {
    this.displayValorAct.innerHTML = this.valorActual;
    this.displayValorAnt.innerHTML = this.valorAnterior;
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.mostrarValores();
  }
  borrarTodo() {
    this.valorActual = new String();
    this.valorAnterior = new String();
    this.operacion = undefined;
    this.mostrarValores();
  }

  calcular() {
    this.displayValorAct.innerHTML = eval(this.valorActual);
    //console.log(this.displayValorActual.innerHTML, "displayValorActual");
  
  }




}
