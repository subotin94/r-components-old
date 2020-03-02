import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
   :host {
     display: block;
     height: 100%;
   }
  `]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
