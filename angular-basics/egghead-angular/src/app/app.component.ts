import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
    `
      <h1>{{title}}</h1>
    `,
  styles: [
    `
      h1 {
        color: blue;
      }
    `
  ]
})
export class AppComponent {
  public title: string = 'egghead-angular';
}
