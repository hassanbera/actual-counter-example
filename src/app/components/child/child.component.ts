import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // Parent bileşenden gelen sayaç değeri
  @Input() counter: number = 0;
  
  // Parent bileşene event göndermek için Output dekoratörleri
  @Output() increment= new EventEmitter<void>();
  @Output() decrement= new EventEmitter<void>();
  
// Butonlar tetiklendiğinde EventEmitter ile parent'a bilgi gönderir.

onIncrement(){
  this.increment.emit();

}
onDecrement(){
  this.decrement.emit();
}
}
