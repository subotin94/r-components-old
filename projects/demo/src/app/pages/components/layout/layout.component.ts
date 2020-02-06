import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
