import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'r-icon',
  templateUrl: './r-icon.component.html',
  styleUrls: ['./r-icon.component.scss']
})
export class RIconComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
