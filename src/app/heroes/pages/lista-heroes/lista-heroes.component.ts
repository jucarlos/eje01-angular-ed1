import { Component } from '@angular/core';

@Component({
  selector: 'heroes-lista-heroes',
  standalone: false,
  templateUrl: './lista-heroes.component.html',
  styleUrl: './lista-heroes.component.css'
})
export class ListaHeroesComponent {

  public heroes: string[] = ['Capitán América', 'SuperMan', 'Iron Man', 'Wonder Woman'  ]
  public heroeBorrado: string = '';

  borrarUltimoHeroe(): void {
    
    this.heroeBorrado = this.heroes.pop() || '';


  }

}
