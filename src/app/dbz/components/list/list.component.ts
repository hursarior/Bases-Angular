import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  public emitidor :EventEmitter<string> = new EventEmitter();


    @Input()
    listaCharacter:Character[] = [{
      nombre: 'Emmanuel',
      power: 1000
    }]

    onDeleteId(Id:string){

      this.emitidor.emit(Id);

    }

    onDeleteCharacter(index:number):void{
      console.log(index);
    }
 }
