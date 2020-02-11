import { Component, ViewChild, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { RToastService } from '../../../r-components/src/public-api';
import { MatDialog } from '@angular/material/dialog';
import { RSidenavComponent } from '../../../r-components/src/components/navigation/r-sidenav/r-sidenav.component';
import { RNavbarComponent } from 'projects/r-components/src/components/navigation/r-navbar/r-navbar.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * @rError
   */
  requiredField = new FormControl(null, Validators.required);

  ngOnInit() {
    // console.log(this.sidenav);
    // this.sidenav.openedChange.subscribe(console.log);
  }

  /**
   * @sidenav
   */
  @ViewChild(RSidenavComponent, { static: true })
  sidenav: RSidenavComponent;
  get isMobile() {
    return window.innerWidth < 768;
  }
  async toggle() {
    await this.sidenav.toggle();
    // console.log('Done');
  }
  /**
   * @navbar
   */
  @ViewChild(RNavbarComponent, { static: true })
  navbar: RNavbarComponent;

  @ViewChild('dialogContent', {static: true})
  dialogContent: TemplateRef<HTMLElement>;
  openDialog() {
    this.dialog.open(this.dialogContent);
  }
  constructor(private readonly renderer: Renderer2,
              private readonly toastService: RToastService,
              private dialog: MatDialog) {
  }


  /**
   * @selectMenus
   */
  onSelectedChange($event) {
    // console.log($event);
  }


}
