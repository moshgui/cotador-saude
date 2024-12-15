import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';

@NgModule({
  declarations: [AppComponent, CardComponent, HomeComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonsModule.forRoot()],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
