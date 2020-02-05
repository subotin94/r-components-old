import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-extra',
  template: `
    <p>
      extra works!
    </p>
  `,
  styles: []
})
export class ExtraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
