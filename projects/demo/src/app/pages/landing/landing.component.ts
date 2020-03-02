import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-landing',
  template: `
    <demo-navbar></demo-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
