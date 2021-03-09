import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListarGastosComponent } from './components/gastos/listar-gastos/listar-gastos.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    PresupuestoComponent,
    IngresarGastoComponent,
    ListarGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
