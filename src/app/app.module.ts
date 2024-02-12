import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter/counter.module';
import { HeroModule } from './heroes/hero/hero.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeroModule,
    CounterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
