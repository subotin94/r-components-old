import { Component, ContentChildren, QueryList } from '@angular/core';
import { RSubscriptionComponent } from '../../core/r-subscription-component.interface';
import { SubSink } from 'subsink';
import { RExpansionPanelComponent } from '../expansion-panel';

@Component({
  selector: 'r-expansion-panel-list',
  template: `<ng-content select="r-expansion-panel"></ng-content>`,
  styleUrls: ['./expansion-panel-list.component.scss']
})
export class RExpansionPanelListComponent implements RSubscriptionComponent {
  readonly subs = new SubSink();

  @ContentChildren(RExpansionPanelComponent)
  private readonly panels: QueryList<RExpansionPanelComponent>;
  private panelStates: boolean[] = [];

  ngAfterContentInit(): void {
    const panels = this.panels.toArray();
    this.panelStates = panels.map(i => i.expanded);
    panels.forEach((panel: RExpansionPanelComponent, index: number) => {
      this.subs.add(panel.expandedChange.subscribe((expanded: boolean) => {
        if (expanded) {
          this.resetPanelStates();
          panel.expanded = true;
          panel.header.expanded = true;
          this.panelStates[index] = true;
        }
      }));
    });
  }

  private resetPanelStates(): void {
    const panels = this.panels.toArray();
    panels.forEach((panel: RExpansionPanelComponent, index: number) => {
      panel.expanded = false;
      panel.header.expanded = false;
      this.panelStates[index] = false;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
