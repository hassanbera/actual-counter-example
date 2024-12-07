import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  // sayaç değeri
  counterValue: number = 0;

  // Sayaç değerini artıran fonksiyon
  incrementCounter() {
    this.counterValue++;
  }
  // Sayaç değerini azaltan fonksiyon
  decrementCounter(){
    this.counterValue--;
  }

}
