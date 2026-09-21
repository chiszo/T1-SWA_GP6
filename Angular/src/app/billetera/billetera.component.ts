import { Component } from '@angular/core';
import { NuevoMovimientoComponent } from '../nuevo-movimiento/nuevo-movimiento.component';
import { Movimiento } from '../models/movimiento.model';

@Component({
  imports: [NuevoMovimientoComponent],
  selector: 'app-billetera',
  styleUrl: './billetera.component.css',
  templateUrl: './billetera.component.html',
})
export class BilleteraComponent {
  
  saldo: number = 250.00;
  movimientos: Movimiento[] = [
    { fecha: '18/09/2026', tipo: 'Recarga', monto: 100.00 },
    { fecha: '17/09/2026', tipo: 'Gasto', monto: 24.51 },
    { fecha: '15/09/2026', tipo: 'Gasto', monto: 75.49 },
    { fecha: '12/09/2026', tipo: 'Recarga', monto: 250.00 }
  ];

  procesarMovimiento(mov: Movimiento) {
    this.movimientos.unshift(mov);
    if (mov.tipo === 'Recarga') {
      this.saldo += mov.monto;
    } else if (mov.tipo === 'Gasto') {
      this.saldo -= mov.monto;
    }

  }

  
}
