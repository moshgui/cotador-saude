import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonsModule.forRoot()],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
