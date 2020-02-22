import { Component } from '@angular/core';
import { RToastService } from 'projects/r-components/src/components/popups/r-toast/toast';

@Component({
  selector: 'demo-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  constructor(private readonly toastService: RToastService) { }

  dangerToast(): void {
    this.toastService.danger('This is danger message');
  }

  warningToast(): void {
    this.toastService.warning('This is warning message');
  }

  primaryToast(): void {
    this.toastService.primary('This is primary message');
  }

  infoToast(): void {
    this.toastService.info('This is info message');
  }

  successToast(): void {
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

}
