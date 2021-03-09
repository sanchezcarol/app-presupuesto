import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy {

  suscription:Subscription
  presupuesto:number = 0
  restante:number = 0
  listaGastos:any[] = []

  constructor(private _presupuestoService:PresupuestoService) {
    this.suscription = this._presupuestoService.getGastos().subscribe( data => {
      this.restante -= data.cantidad
      this.listaGastos.push(data)
    })
   }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto
    this.restante = this._presupuestoService.restante  
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe()
  }

  colorRestante(){
    if(this.presupuesto/4 > this.restante){
      return 'alert alert-danger'
    }
    if(this.presupuesto/2 > this.restante){
      return 'alert alert-warning'
    }
    return 'alert alert-secondary'
  }
}
