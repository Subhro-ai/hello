import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<h3 class = "text-danger">{{name}}</h3>
             <h1 [style.color] = "hasError ? 'green' : 'red'">Style Binding </h1>
             <h2 [style.color] = "highlight">Highlight</h2>
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
  public className = "text-success";
  public hasError = false;
  public isSpecial = true;
  public highlight = "orange";
  }

