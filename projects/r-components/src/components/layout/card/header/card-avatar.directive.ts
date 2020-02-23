import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[r-card-avatar]',
  host: {'class': 'r-card-avatar'}
})
export class RCardAvatarDirective {
  constructor(private readonly hostRef: ElementRef<HTMLElement>) {
    console.log(this.hostRef);
  }
}
