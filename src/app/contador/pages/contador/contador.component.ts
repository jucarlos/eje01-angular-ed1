import { Component } from '@angular/core';

@Component({
  selector: 'conta-contador',
  standalone: false,
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  public title: string = 'Contador';
  public counter: number = 10;



  incrementar(valor: number ): void {

    this.counter = this.counter + valor;
    
  }



}
