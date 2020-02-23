import { Component, Input, ContentChild, Output, EventEmitter } from '@angular/core';
import { RExpansionPanelHeaderComponent } from './r-expansion-panel-header/r-expansion-panel-header.component';
import { R_EXPANSION_PANEL_ANIMATIONS } from './r-expansion-panel.animations';
import { RSubscriptionComponent } from '../../core/r-subscription-component.interface';
import { SubSink } from 'subsink';

@Component({
  selector: 'r-expansion-panel',
  templateUrl: './r-expansion-panel.component.html',
  styleUrls: ['./r-expansion-panel.component.scss'],
  animations: R_EXPANSION_PANEL_ANIMATIONS
})
export class RExpansionPanelComponent implements RSubscriptionComponent {

  readonly subs = new SubSink();
  @Input() disableShadow: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() expanded: boolean = false;
  @Output() expandedChange = new EventEmitter<boolean>();
  @ContentChild(RExpansionPanelHeaderComponent, { static: true })
  header: RExpansionPanelHeaderComponent;

  constructor() { }

  ngOnInit(): void {
    this.header.expanded = this.expanded;
    this.subs.add(this.header.onClick.subscribe(() => this.toggle()));
  }

  expand(): void {
    this._toggle(true);
  }

  collapse(): void {
    this._toggle(false);
  }

  toggle(): void {
    this._toggle();
  }

  private _toggle(expanded?: boolean): void {
     if (expanded === undefined) {
        this.expanded = !this.expanded;
     } else if (expanded && !this.expanded) {
        this.expanded = true;
     } else if (!expanded && this.expanded) {
        this.expanded = true;
     }
     this.header.expanded = this.expanded;
     this.expandedChange.next(this.expanded);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
