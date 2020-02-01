import { Component, ContentChild } from '@angular/core';
import { RNavbarComponent } from '../../r-navbar';

@Component({
  selector: 'r-sidenav-content',
  templateUrl: './r-sidenav-content.component.html',
  styleUrls: ['./r-sidenav-content.component.scss']
})
export class RSidenavContentComponent {
  @ContentChild(RNavbarComponent, {static: false})
  navbar: RNavbarComponent;
}
