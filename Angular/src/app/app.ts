import { Component, signal } from '@angular/core';
import { BilleteraComponent } from './billetera/billetera.component';



@Component({
  imports: [BilleteraComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
