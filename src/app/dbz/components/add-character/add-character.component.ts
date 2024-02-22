import { Component,EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    Character:Character = {
      nombre: '',
      power: 0
    }

    emitirCharacter():void{
      console.log(this.Character)
      if(this.Character.nombre.length === 0) return;

      this.onNewCharacter.emit(this.Character)
      this.Character = { nombre: '', power: 0 }
    }
}
