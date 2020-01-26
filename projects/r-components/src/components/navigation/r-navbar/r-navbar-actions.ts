import { Directive, Component } from '@angular/core';

@Directive({
  selector: 'a[r-nav-link]'
})
export class RNavbarLinkDirective { }

@Directive({
  selector: 'a[r-nav-action]'
})
export class RNavbarActionDirective { }

@Component({
  selector: '',
  template: ``,
  styles: [``]
})
export class RNavbarActionsComponent { }
