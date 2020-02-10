import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
