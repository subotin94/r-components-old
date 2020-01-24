import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'r-layout',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./r-layout.component.scss']
})
export class RLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
