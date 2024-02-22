import { DbzServicesService } from '../../services/dbz.services.service';
import { Character } from './../../interfaces/Character.interface';
import { Component } from '@angular/core';


@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrl: './main-pages.component.css'
})
export class MainPagesComponent {

constructor(private dbzService:DbzServicesService){}

get Characterlista(): Character[]{
  return[...this.dbzService.Characterlista];
}


onDeleteCharacter(id:string):void{
  this.dbzService.deleteCharacterById(id);
}

onNewCharacter(character:Character):void{
 this.dbzService.onNewCharacter(character);
}

}
