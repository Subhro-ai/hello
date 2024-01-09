import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
            
            <h2> {{"Hello " + name}} </h2>
            <button (click)="fireEvent()">Click</button>
              
`,
  styles: []
})
export class Test1Component {
  @Input('parentData') public name: any;

  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Hey Subhro');
  }
}

  

