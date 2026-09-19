import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BilleteraService } from '../billetera-servicio/servicio.billetera';
import { NuevoMovimientoComponent } from '../nuevo-movimiento/nuevo-movimiento.component';

@Component({
  imports: [NuevoMovimientoComponent,CommonModule],
  selector: 'app-billetera',
  styleUrl: './billetera.component.css',
  templateUrl: './billetera.component.html',
})
export class BilleteraComponent {

  constructor(public billeteraService: BilleteraService) {}
 
}
