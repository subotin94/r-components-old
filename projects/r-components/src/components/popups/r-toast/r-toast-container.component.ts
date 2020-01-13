import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { RToastComponent } from './r-toast.component';
import { RToast } from './r-toast.model';

const voidState = style({
  transform: 'translateX({{ direction }}-110%)',
  height: 0,
  marginLeft: '0',
  marginRight: '0',
  marginTop: '0',
  marginBottom: '0'
});

const defaultOptions = { params: { direction: '' } };

@Component({
  selector: 'r-toast-container',
  template: `
    <ng-container>
      <r-toast [@fadeIn]="fadeIn" *ngFor="let toast of content" [toast]="toast"></r-toast>
    </ng-container>
  `,
  animations: [
  trigger('fadeIn', [
    transition(':enter', [voidState, animate(100)], defaultOptions),
    transition(':leave', [animate(100, voidState)], defaultOptions),
  ])
],
})
export class RToastContainerComponent {

  @Input()
  content: RToast[] = [];

  @Input()
  context: any;

  @ViewChildren(RToastComponent)
  toasts: QueryList<RToastComponent>;

  fadeIn: any;

}
