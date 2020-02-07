import { Component, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'r-tab',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: [`r-tab.component.scss`]
})
export class RTabComponent {

  @Input() label: string;
  @Input() active: boolean = false;
  width: number;

  constructor(private readonly hostRef: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.width = this.hostRef.nativeElement.getBoundingClientRect().width + 64;
  }

  @HostBinding('style.display')
  get display(): string {
    return this.active ? 'inline-block' : 'none';
  }

}
