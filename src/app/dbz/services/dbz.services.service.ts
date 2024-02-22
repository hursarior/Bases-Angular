import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/Character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzServicesService {

  Characterlista: Character[] =[{
    id: uuid(),
    nombre: 'James',
    power: 10000
  },{
    id: uuid(),
    nombre: 'Marcos',
    power: 10000
  },
  {
    id: uuid(),
    nombre: 'Marcos',
    power: 10000
  }];

  onNewCharacter(caracter:Character){
    const newCharacter:Character ={
      id:uuid(),
      ...caracter
    }
    console.log(newCharacter.id);
    this.Characterlista.push(newCharacter);
  }

 deleteCharacterById(Id:string){
    this.Characterlista = this.Characterlista.filter( character => character.id !== Id);
  }

}
