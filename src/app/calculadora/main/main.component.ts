import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  resultado:string='';

  ResultadoCalculo(resultado:string){
   this.resultado = resultado;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
