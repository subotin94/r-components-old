import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
