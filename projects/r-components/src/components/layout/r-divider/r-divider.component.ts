import { Component, Input, HostBinding,  } from '@angular/core';

export type RDividerDirection = 'horisontal' | 'vertical';

@Component({
  selector: 'r-divider',
  templateUrl: './r-divider.component.html',
  styleUrls: ['./r-divider.component.scss']
})
export class RDividerComponent {

  @Input() direction: RDividerDirection = 'horisontal';

  @HostBinding('class.vertical')
  get isVertical(): boolean {
    return this.direction === 'vertical';
  }

}
