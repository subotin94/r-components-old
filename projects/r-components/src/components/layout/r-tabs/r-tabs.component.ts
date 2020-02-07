import { Component, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { RTabComponent } from './r-tab/r-tab.component';

@Component({
  selector: 'r-tabs',
  templateUrl: './r-tabs.component.html',
  styleUrls: ['./r-tabs.component.scss']
})
export class RTabsComponent implements AfterContentInit {

  @ContentChildren(RTabComponent)
  tabs: QueryList<RTabComponent>;
  rTabActiveLabelMarginLeft = 0;
  activeTab: RTabComponent;

  constructor() { }

  ngAfterContentInit(): void {
    this.checkActiveTab();
  }

  switchTab(tab: RTabComponent): void {
    this.tabs.forEach((_tab: RTabComponent) => {
      _tab.active = false;
    });
    this.setActiveTab(tab);
  }

  private setActiveTab(tab: RTabComponent) {
    tab.active = true;
    this.activeTab = tab;
    this.updateRTabActiveLabelMarginLeft();
  }

  private checkActiveTab(): void {
    let isAnyTabActive = false;
    this.tabs.forEach((tab: RTabComponent) => {
      if (isAnyTabActive && tab.active) {
        tab.active = false;
        throw new Error('Only one r-tab can be active');
      } else if (tab.active) {
        isAnyTabActive = true;
      }
    });
    if (!isAnyTabActive) {
      this.setActiveTab(this.tabs.first);
    }
  }

  private updateRTabActiveLabelMarginLeft(): void {
    let retVal = 0;
    for (let i = 0; i < this.tabs.length; i++) {
      const tab: RTabComponent = this.tabs['_results'][i];
      if (!tab) {
        break;
      } else if (tab && tab.active && i === 0) {
        break;
      } else if (tab.active) {
        break;
      } else {
        retVal += tab.width;
      }
    }
    this.rTabActiveLabelMarginLeft = retVal;
  }

}
