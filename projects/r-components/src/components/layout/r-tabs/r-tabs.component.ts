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

  get rTabActiveLabelLeft(): number {
    const tabWidth = 6.10375;
    let retVal = 1;
    for (let i = 0; i < this.tabs.length; i++) {
      const tab: RTabComponent = this.tabs['_results'][i];
      if (!tab) {
        break;
      } else if (tab && tab.active && i === 0) {
        break;
      } else if (tab.active) {
        break;
      } else {
        retVal += tabWidth;
      }
      return retVal;
    }
  }

}
