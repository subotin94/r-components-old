import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelectedChange($event) {
    console.log($event);
  }

}
