import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Imposta qui le tue api key
     AgmCoreModule.forRoot({apiKey: 'AIzaSyC-fsfM-piCvdrloo30qlqtnZyX2SgBpCg'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
