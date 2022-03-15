import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {

  num1:number=0;
  num2:number=0;

  resultado:string='';

  @Output() resultadoEvent:EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  Sumar():void{
    this.resultado = "El resultado es: "+String(this.num1+this.num2);
    this.resultadoEvent.emit(this.resultado);
  }

  Restar():void{
    this.resultado = "El resultado es: "+String(this.num1-this.num2);
    this.resultadoEvent.emit(this.resultado);
  }

  Multiplicar():void{
    this.resultado = "El resultado es: "+String(this.num1*this.num2);
    this.resultadoEvent.emit(this.resultado);
  }

  Dividir():void{
    this.resultado = "El resultado es: "+String(this.num1/this.num2);
    this.resultadoEvent.emit(this.resultado);
  }

  Limpiar():void{
    this.num1=0;
    this.num2=0;
    this.resultado = "";
    this.resultadoEvent.emit(this.resultado);
  }

}
