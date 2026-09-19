import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BilleteraService {

  saldo: number = 250;

  movimientos = [
    {
      fecha: '12/09/2026',
      tipo: 'Recarga',
      monto: 100
    },
    {
      fecha: '11/09/2026',
      tipo: 'Gasto',
      monto: 45.50
    },
    {
      fecha: '10/09/2026',
      tipo: 'Gasto',
      monto: 20
    },
    {
      fecha: '09/09/2026',
      tipo: 'Recarga',
      monto: 200
    }
  ];

  registrarMovimiento(tipo: string, monto: number) {
    //Actualizar saldo
    if (tipo === 'Recarga') {
      this.saldo += monto;
    } else {
      this.saldo -= monto;
    }

    //Agregar movimiento al inicio de la lista
    this.movimientos.unshift({
      fecha: new Date().toLocaleDateString('es-PE'),
      tipo: tipo,
      monto: monto
    });
  }

}
