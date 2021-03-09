import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  cantidad:number = 0;
  cantidadIncorrecta: boolean = false;

  constructor(private _presupuestoService:PresupuestoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    if(this.cantidad > 0){
      this.cantidadIncorrecta = false

      this._presupuestoService.presupuesto = this.cantidad
      this._presupuestoService.restante = this.cantidad
      
      this.router.navigate(['/gastos'])

    }
    else {
      this.cantidadIncorrecta = true
    }
    
  }

}
