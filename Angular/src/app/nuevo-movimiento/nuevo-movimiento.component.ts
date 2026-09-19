import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BilleteraService } from '../billetera-servicio/servicio.billetera';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-nuevo-movimiento',
  styleUrl: './nuevo-movimiento.component.css',
  templateUrl: './nuevo-movimiento.component.html',
})
export class NuevoMovimientoComponent {
  monto: number = 0 ;
  tipo: string = '';
  mensajeError: string = '';
  constructor(private billeteraService: BilleteraService) {}

  registrarMovimiento() {

    // Limpiamos el mensaje anterior
    this.mensajeError = '';

    // Validar que el monto sea mayor que 0
    if (this.monto <= 0) {
      this.mensajeError = 'El monto debe ser mayor que 0.';
      return;
    }

      // Validar que un gasto no supere el saldo disponible
      if (
        this.tipo === 'Gasto' &&
        this.monto > this.billeteraService.saldo
      ) {
        this.mensajeError = 'El gasto no puede superar el saldo disponible.';
        return;
      }

    //Comprobar que se está enviando
    console.log('Tipo:', this.tipo);
    console.log('Monto:', this.monto);

  //Registrar movimiento 
  this.billeteraService.registrarMovimiento(
    this.tipo,
    this.monto
  );

  // Limpiar el formulario después de registrar
  this.monto = 0;
  this.tipo = 'Recarga';
  }

}
