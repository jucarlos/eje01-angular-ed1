import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaHeroesComponent } from './pages/lista-heroes/lista-heroes.component';



@NgModule({
  declarations: [
    ListaHeroesComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ListaHeroesComponent
  ]
})
export class HeroesModule { }
