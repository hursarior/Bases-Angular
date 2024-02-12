import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public delete?: string;

  borrar(){
    this.delete = this.heroNames.pop();
  }
}
