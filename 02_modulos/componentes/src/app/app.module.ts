//Elementos de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Módulos de la aplicación
import { SharedModule } from './shared/shared.module';

//Componentes
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
