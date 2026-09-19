import { Component, input, output } from '@angular/core';
import { Movimiento } from '../models/movimiento.model';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-nuevo-movimiento',
  styleUrl: './nuevo-movimiento.component.css',
  templateUrl: './nuevo-movimiento.component.html',
})

export class NuevoMovimientoComponent {

  saldo = input.required<number>();
  nuevoMovimiento = output<Movimiento>();
  tipo: string = '';
  monto: number = 0;

  actualizarTipo(event: Event) {
    this.tipo = (event.target as HTMLSelectElement).value;
  }

  actualizarMonto(event: Event) {
  const valorEscrito = (event.target as HTMLInputElement).value;
  this.monto = valorEscrito ? parseFloat(valorEscrito) : 0;
  }

  esInvalido(): boolean {
  if (!this.tipo || this.monto <= 0) return true;
  if (this.tipo === 'Gasto' && this.monto > this.saldo()) return true;
  return false;
}

  registrar() {
  if (!this.esInvalido()) {
    const hoy = new Date();
    const fechaStr = hoy.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    this.nuevoMovimiento.emit({
      fecha: fechaStr,
      tipo: this.tipo as 'Recarga' | 'Gasto',
      monto: Number(this.monto)
    });
    this.monto = 0;
    this.tipo = '';
  }
  }
}



