import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-popups',
  template: '<router-outlet>',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class PopupsComponent implements OnInit {

  constructor() { }2

  ngOnInit() {
  }

}
