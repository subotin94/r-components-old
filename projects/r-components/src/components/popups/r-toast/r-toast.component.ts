import { Component, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { RToast } from './r-toast.model';

@Component({
  selector: 'r-toast',
  templateUrl: './r-toast.component.html',
  styleUrls: ['./r-toast.component.scss']
})
export class RToastComponent {

  @Input()
  toast: RToast;

  @Output() destroy: EventEmitter<void> = new EventEmitter();

  @HostBinding('class.status-info')
  get info(): boolean {
    return this.toast.config.status === 'info';
  }

  @HostBinding('class.status-primary')
  get primary(): boolean {
    return this.toast.config.status === 'primary';
  }

  @HostBinding('class.status-success')
  get success(): boolean {
    return this.toast.config.status === 'success';
  }

  @HostBinding('class.status-warning')
  get warning(): boolean {
    return this.toast.config.status === 'warning';
  }

  @HostBinding('class.status-danger')
  get danger(): boolean {
    return this.toast.config.status === 'danger';
  }

  // @HostBinding('class.status-destroy-by-click')
  // get destroyByClick(): boolean {
  //   return this.toast.config.destroyByClick;
  // }

  // @HostBinding('class.status-has-icon')
  // get hasIcon(): boolean {
  //   const { icon } = this.toast.config;
  //   if (typeof icon === 'string') {
  //     return true;
  //   }

  //   return !!(icon && (icon as RIconConfig).icon);
  // }

  // @HostBinding('class.status-custom-icon')
  // get customIcon(): boolean {
  //   return !!this.icon;
  // }

  // get icon(): string | RIconConfig {
  //   return this.toast.config.icon;
  // }

  /* @deprecated Use pack property of icon config */
  // get iconPack(): string {
  //   return this.toast.config.iconPack;
  // }

  /*
    @breaking-change 5 remove
    @deprecated
  */
  // get iconConfig(): RIconConfig {
  //   const toastConfig = this.toast.config;
  //   const isIconName = typeof this.icon === 'string';

  //   if (!isIconName) {
  //     return toastConfig.icon as RIconConfig;
  //   }

  //   const iconConfig: RIconConfig = { icon: toastConfig.icon as string };
  //   if (toastConfig.iconPack) {
  //     iconConfig.pack = toastConfig.iconPack;
  //   }

  //   return iconConfig;
  // }

  @HostListener('click')
  onClick() {
    this.destroy.emit();
  }

}
