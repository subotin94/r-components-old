import { Component, OnInit, ElementRef, Input, HostBinding } from '@angular/core';

/**
 * @todo
 * @subbre
 * Create r sidenav actions component representing <ul> and each r sidenav action is li
 */
@Component({
  selector: 'r-navbar',
  template: `
    <nav>
      <ng-content select="r-sidenav-actions"></ng-content>
      <ng-content></ng-content>
    </nav>
  `,
  styleUrls: ['./r-navbar.component.scss']
})
export class RNavbarComponent implements OnInit {

  @Input()
  get fixed(): boolean {
    return this._fixed;
  }
  set fixed(fixed: boolean) {
    this._fixed = fixed;
  }
  private _fixed = false;

  constructor(private readonly hostRef: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.checkIsFixed();
  }

  /**
   * We have to check attributes to support `<r-navbar fixed>`
   * without being forced to use `<r-navbar [fixed]="true">`
   * @docs-private
   */
  private checkIsFixed(): void {
    if ('fixed' in this.getAttributes()) {
      this.fixed = true;
    }
  }

  private getAttributes(): NamedNodeMap {
    return this.hostRef.nativeElement.attributes;
  }

  @HostBinding('class.r-navbar-fixed')
  get isFixed(): boolean {
    return this.fixed;
  }

}
