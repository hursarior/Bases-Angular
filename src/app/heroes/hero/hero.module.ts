import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero/hero.component';
import { ListComponent } from '../components/list/list.component';



@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListComponent,
    HeroComponent
  ]
})
export class HeroModule { }
