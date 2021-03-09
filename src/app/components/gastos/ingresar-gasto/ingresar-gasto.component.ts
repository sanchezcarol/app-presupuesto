import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  tipoGasto: string = ""
  cantidadGasto: number = 0
  formularioIncorrecto: boolean = false
  error: string = ""

  constructor(private _presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
  }

  agregarGasto() {


    if (this.tipoGasto == '' || this.cantidadGasto <= 0) {
      this.error = "Debe rellenar los campos"
      this.formularioIncorrecto = true
      return;
    }
    if (this.cantidadGasto > this._presupuestoService.restante) {
      this.error = "La cantidad ingresada es mayor que el restante"
      this.formularioIncorrecto = true
      return;
    }

    const GASTO = {
      tipo: this.tipoGasto,
      cantidad: this.cantidadGasto
    }

    this._presupuestoService.agregarGasto(GASTO)

    this.formularioIncorrecto = false
    this.tipoGasto = ""
    this.cantidadGasto = 0
  
}

}
