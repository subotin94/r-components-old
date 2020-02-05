import { Component, OnInit, ElementRef, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'r-card',
  templateUrl: './r-card.component.html',
  styleUrls: ['./r-card.component.scss']
})
export class RCardComponent implements OnInit {

  @Input()
  get fullWidth(): boolean {
    return this._fullWidth;
  }
  set fullWidth(value: boolean) {
    this._fullWidth = value;
  }
  private _fullWidth = false;

  constructor(private readonly hostRef: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.checkIsFullWidth();
  }

  /**
   * We have to check attributes to support `<r-card fullWidth>` or `<r-card fullwidth>`
   * without being forced to use `<r-card [fullWidth]="true">`
   * @docs-private
   */
  private checkIsFullWidth(): void {
    if ('fullwidth' in this.getAttributes()) {
      this.fullWidth = true;
    }
  }

  private getAttributes(): NamedNodeMap {
    return this.hostRef.nativeElement.attributes;
  }

  @HostBinding('style.width')
  get width(): string {
    if (this.fullWidth) {
      return '100%';
    } else {
      return 'unset';
    }
  }

}
