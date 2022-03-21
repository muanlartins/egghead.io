import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
    `
      <app-habit-list></app-habit-list>
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
