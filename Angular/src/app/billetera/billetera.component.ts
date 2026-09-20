import { Component } from '@angular/core';
import { NuevoMovimientoComponent } from '../nuevo-movimiento/nuevo-movimiento.component';

@Component({
  imports: [NuevoMovimientoComponent],
  selector: 'app-billetera',
  styleUrl: './billetera.component.css',
  templateUrl: './billetera.component.html',
})
export class BilleteraComponent {}
