import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // requiredField = new FormControl(null, Validators.required);

}
