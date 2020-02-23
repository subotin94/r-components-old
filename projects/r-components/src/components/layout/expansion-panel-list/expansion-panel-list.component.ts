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

  ngAfterContentInit(): void {
    this.subscribeOnExpandedChanges();
  }

  private subscribeOnExpandedChanges(): void {
    const panels = this.panels.toArray();
    panels.forEach((panel: RExpansionPanelComponent) => {
      this.subs.add(panel.expandedChange.subscribe((expanded: boolean) => {
        if (expanded) {
          this.resetPanelStates(panels);
          panel.expanded = true;
          panel.header.expanded = true;
        }
      }));
    });
  }

  private resetPanelStates(panels): void {
    panels.forEach((panel: RExpansionPanelComponent) => {
      panel.expanded = false;
      panel.header.expanded = false;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
