import { Component, ContentChild, AfterViewInit, HostBinding } from '@angular/core';
import { RNavbarComponent } from '../../r-navbar';

@Component({
  selector: 'r-sidenav-content',
  templateUrl: './r-sidenav-content.component.html',
  styleUrls: ['./r-sidenav-content.component.scss']
})
export class RSidenavContentComponent implements AfterViewInit {

  @ContentChild(RNavbarComponent, {static: false})
  navbar: RNavbarComponent;

  ngAfterViewInit(): void {
    console.log(this.navbar.fixed);
  }

  @HostBinding('style.margin-top.px')
  get marginTop(): number {
    return this.navbar && this.navbar.fixed && 76;
  }

}
