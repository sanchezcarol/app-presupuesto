import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GastosComponent } from "./components/gastos/gastos.component";
import { IngresarGastoComponent } from "./components/gastos/ingresar-gasto/ingresar-gasto.component";
import { PresupuestoComponent } from "./components/presupuesto/presupuesto.component";

const routes: Routes= [
    {path: 'ingresarPresupuesto', component: PresupuestoComponent},
    {path: 'gastos', component: GastosComponent},
    {path:'', redirectTo: 'ingresarPresupuesto', pathMatch:'full'},
    {path: '**', redirectTo: 'ingresarPresupuesto', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}