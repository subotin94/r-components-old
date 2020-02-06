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
    console.log('Hello World');
  }

}
