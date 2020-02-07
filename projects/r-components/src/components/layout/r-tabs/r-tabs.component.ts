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
      this.tabs.first.active = true;
    }
  }

  switchTab(tab: RTabComponent): void {
    this.tabs.forEach((_tab: RTabComponent) => {
      _tab.active = false;
    });
    tab.active = true;
  }

}
