import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<h3 class = "text-danger">{{name}}</h3>
             <button (click)="onClick($event)">Greet</button>
             {{greeting}}
`,
  styles: [`
    .text-danger {
      color : red;
    }
    .text-success {
      color : green;
    }
    .text-special {
      font-style : italic;
    }

  `]
})
export class Test1Component {
  public name = "Subhro";
  public greeting = "";
  onClick(event: any) {
    console.log(event);
    this.greeting = "Wecome " + this.name;
  }
  }

