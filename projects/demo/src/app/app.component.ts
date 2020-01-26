import { Component, ViewChild, TemplateRef } from '@angular/core';
import { RToastService } from '../../../r-components/src/public-api';
import { MatDialog } from '@angular/material/dialog';
import { RSidenavComponent } from '../../../r-components/src/components/navigation/r-sidenav/r-sidenav.component';
import { RNavbarComponent } from 'projects/r-components/src/components/navigation/r-navbar/r-navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
    console.log(this.sidenav);
    this.sidenav.openedChange.subscribe(console.log);
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
    console.log('Done');
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
  constructor(private readonly toastService: RToastService, private dialog: MatDialog) { }
  /**
   * @selectMenus
   */
  onSelectedChange($event) {
    console.log($event);
  }
  /**
   * @toasters
   */
  dangerToast() {
    this.toastService.danger('This is danger message');
  }
  warningToast() {
    this.toastService.warning('This is warning message');
  }
  primaryToast() {
    this.toastService.primary('This is primary message');
  }
  infoToast() {
    this.toastService.info('This is info message');
  }
  successToast() {
    this.toastService.success('This is success message');
  }
  toastModule = `
    import { NgModule } from '@angular/core';
    import { RToastModule } from '@r-components/theme/toast';

    @NgModule({
      imports: [
        RToastModule.forRoot()
      ]
    })
    export class YourModule {}
  `;
  toastServicee = `
  <button (click)="dangerToast()" r-button status="danger">Danger</button>
  <button (click)="warningToast()" r-button status="warning">Warning</button>
  <button (click)="primaryToast()" r-button status="primary">Primary</button>
  <button (click)="infoToast()" r-button status="info">Info</button>
  <button (click)="successToast()" r-button status="success">Success</button>

  import { RToastService } from '@r-components/theme/toast';

  constructor(private readonly toastService: RToastService) { }

  dangerToast() {
    this.toastService.danger('This is danger message');
  }

  warningToast() {
    this.toastService.warning('This is warning message');
  }

  primaryToast() {
    this.toastService.primary('This is primary message');
  }

  infoToast() {
    this.toastService.info('This is info message');
  }

  successToast() {
    this.toastService.success('This is success message');
  }
  `;
  /**
   * @buttons
   */
  buttonModule = `
    import { NgModule } from '@angular/core';
    import { RButtonModule } from '@r-components/theme/button';

    @NgModule({
      imports: [
        RButtonModule
      ]
    })
    export class YourModule {}
  `;
  statusButtons = `
    <button r-button status="danger">Danger</button>
    <button r-button status="warning">Warning</button>
    <button r-button status="primary">Primary</button>
    <button r-button status="info">Info</button>
    <button r-button status="success">Success</button>
  `;
  outlineStatusButtons = `
    <button r-button appearance="outline" status="danger">Danger</button>
    <button r-button appearance="outline" status="warning">Warning</button>
    <button r-button appearance="outline" status="primary">Primary</button>
    <button r-button appearance="outline" status="info">Info</button>
    <button r-button appearance="outline" status="success">Success</button>
  `;
  iconButtons = `
    <button r-icon-button icon="add" status="primary">Add</button>
    <button r-icon-button icon="clear" status="danger"></button>
    <button r-icon-button icon="warning" status="warning"></button>
    <button r-icon-button icon="add" status="primary"></button>
    <button r-icon-button icon="info" status="info"></button>
    <button r-icon-button icon="done" status="success"></button>
  `;
  buttonShapes = `
    <button r-button status="primary" shape="rounded-pill">Rounded pill</button>
  `;
  disabledButtons = `
    <button r-button disabled="true">Disabled</button>
    <button r-icon-button icon="add" status="primary" disabled="true"></button>
    <button r-button appearance="outline" disabled="true" status="danger">Disabled</button>
  `;

  /**
   * @alerts
   */
  alertModule = `
    import { NgModule } from '@angular/core';
    import { RAlertModule } from '@r-components/theme/alert';

    @NgModule({
      imports: [
        RAlertModule
      ]
    })
    export class YourModule {}
  `;
  outlineAlerts = `
    <ul>
      <h3>Outline alerts:</h3>
      <li>
        <r-alert closable="true" status="danger">Danger outline</r-alert>
      </li>
      <li>
        <r-alert closable="true" status="warning">Warning outline</r-alert>
      </li>
      <li>
        <r-alert closable="true" status="primary">Primary outline</r-alert>
      </li>
      <li>
        <r-alert closable="true" status="info">Info outline</r-alert>
      </li>
      <li>
        <r-alert closable="true" status="success">Success outline</r-alert>
      </li>
    </ul>
  `;
  filledAlerts = `
    <ul>
      <h3>Filled alerts:</h3>
      <li>
        <r-alert appearance="filled" closable="true" status="danger">Danger filled</r-alert>
      </li>
      <li>
        <r-alert appearance="filled" closable="true" status="warning">Warning filled</r-alert>
      </li>
      <li>
        <r-alert appearance="filled" closable="true" status="primary">Primary filled</r-alert>
      </li>
      <li>
        <r-alert appearance="filled" closable="true" status="info">Info filled</r-alert>
      </li>
      <li>
        <r-alert appearance="filled" closable="true" status="success">Success filled</r-alert>
      </li>
    </ul>
  `;
}
