import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'r-expansion-panel-header',
  template: `
    <ng-content></ng-content>
    <button [style.transform]="expanded ? 'rotate(180deg)' : 'rotate(0deg)'" r-icon-button icon="keyboard_arrow_down"></button>
  `,
  host: {
    'class': 'disable-text-selection'
  },
  styleUrls: ['./r-expansion-panel-header.component.scss']
})
export class RExpansionPanelHeaderComponent {

  @Output() onClick = new EventEmitter<void>();
  expanded: boolean = false;

  @HostListener('click')
  _onClick(): void {
    this.onClick.emit();
  }
}
