import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public name:string = 'ironman';
  public age: number =45;

  get capitalizedName(){
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return ` ${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'spiderman';
  }
  changeAge():void{
    this.age = 23;
  }

  resetForm():void{
    this.age = 45;
    this.name = 'ironman';
  }


}
