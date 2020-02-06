import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-components',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
