import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcularComponent } from './calcular/calcular.component';
import { MainComponent } from './main/main.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    CalcularComponent,
    MostrarComponent
  ],
  exports:[
    MainComponent,
    CalcularComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CalculadoraModule { }
