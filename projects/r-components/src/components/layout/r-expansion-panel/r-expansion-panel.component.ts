import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { RExpansionPanelHeaderComponent } from './r-expansion-panel-header/r-expansion-panel-header.component';
import { R_EXPANSION_PANEL_ANIMATIONS } from './r-expansion-panel.animations';

@Component({
  selector: 'r-expansion-panel',
  templateUrl: './r-expansion-panel.component.html',
  styleUrls: ['./r-expansion-panel.component.scss'],
  animations: R_EXPANSION_PANEL_ANIMATIONS
})
export class RExpansionPanelComponent implements OnInit {

  @Input() disableShadow = false;
  @Input() fullWidth = false;
  @Input() expanded: boolean = false;
  @ContentChild(RExpansionPanelHeaderComponent, { static: true })
  header: RExpansionPanelHeaderComponent;

  constructor() { }

  ngOnInit() {
    this.header.expanded = this.expanded;
    this.header.onClick.subscribe(() => this.toggle());
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
  }

}
