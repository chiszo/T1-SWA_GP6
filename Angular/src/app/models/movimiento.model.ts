export interface Movimiento {
  fecha: string;
  tipo: 'Recarga' | 'Gasto';
  monto: number;
}