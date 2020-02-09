import { Component, Input, HostBinding,  } from '@angular/core';
import { RDividerDirection } from '../../../core/types';

@Component({
  selector: 'r-divider',
  templateUrl: './r-divider.component.html',
  styleUrls: ['./r-divider.component.scss']
})
export class RDividerComponent {

  // @Input()
  // @HostBinding('vertical')
  // get direction() {
  //   return this.direction === 'vertical';
  // }

  // @Input() direction: RDividerDirection;
  // @HostBinding('direction-vertical')
  // get _direction(): boolean {
  //   return this.direction === 'vertical';
  // }
  // set _direction(value: boolean) {
  //   if (value) {
  //     this.direction = 'vertical';
  //   }
  // }
}
