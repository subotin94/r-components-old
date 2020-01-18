import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'r-option',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./r-option.component.scss']
})
export class ROptionComponent<T> implements OnInit {

  constructor(private readonly elementRef: ElementRef) { }

  ngOnInit() {
  }

  get content() {
    return this.elementRef.nativeElement.textContent;
  }

}
