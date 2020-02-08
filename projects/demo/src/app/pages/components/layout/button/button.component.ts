import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
