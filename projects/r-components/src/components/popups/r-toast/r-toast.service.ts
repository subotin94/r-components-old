import { ComponentRef, Injectable, ComponentFactoryResolver, InjectionToken } from '@angular/core';
import { Overlay, GlobalPositionStrategy, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { RToast } from './r-toast.model';
import { RToastContainerComponent } from './r-toast-container.component';
import { RToastComponent } from './r-toast.component';


@Injectable()
export class RToastService {

  constructor(protected readonly containerRegistry: RToastContainerRegistry) { }

  show(message, title?, userConfig?: Partial<any>): RToastRef {
    const config = { ...userConfig };
    const container = this.containerRegistry.get();
    const toast = { message, title, config };
    return container.attach(toast as RToast);
  }

  success(message, title?, config?: Partial<any>): RToastRef {
    return this.show(message, title, { ...config, status: 'success' });
  }

  info(message, title?, config?: Partial<any>): RToastRef {
    return this.show(message, title, { ...config, status: 'info' });
  }

  warning(message, title?, config?: Partial<any>): RToastRef {
    return this.show(message, title, { ...config, status: 'warning' });
  }

  primary(message, title?, config?: Partial<any>): RToastRef {
    return this.show(message, title, { ...config, status: 'primary' });
  }

  danger(message, title?, config?: Partial<any>): RToastRef {
    return this.show(message, title, { ...config, status: 'danger' });
  }

  default(message, title?, config?: Partial<any>): RToastRef {
    return this.show(message, title, { ...config, status: 'basic' });
  }

}

@Injectable()
export class RToastContainerRegistry {
  document = new InjectionToken<Document>('Document');
  private overlays = new Map();

  constructor(private readonly overlay: Overlay,
              private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  get(): RToastContainer {
    const logicalPosition = 'top-end';
    const overlayWithContainer = this.overlays.get(logicalPosition);
    if (!overlayWithContainer || !this.existsInDom(overlayWithContainer.toastrContainer)) {
      if (overlayWithContainer) {
        overlayWithContainer.overlayRef.dispose();
      }
      this.instantiateContainer(logicalPosition);
    }
    return this.overlays.get(logicalPosition).toastrContainer;
  }

  instantiateContainer(position): void {
    const toastrOverlayWithContainer = this.createContainer();
    this.overlays.set(position, toastrOverlayWithContainer);
  }

  createContainer(): { overlayRef: OverlayRef, toastrContainer: RToastContainer } {
    const positionStrategy = new GlobalPositionStrategy().top().right();
    const ref = this.overlay.create({
      positionStrategy
    });
    const containerRef = ref.attach(
      new ComponentPortal(RToastContainerComponent, null, null, this.componentFactoryResolver
    ));
    return {
      overlayRef: ref,
      toastrContainer: new RToastContainer(containerRef),
    };
  }

  existsInDom(toastContainer: RToastContainer): boolean {
    return document.body.contains(toastContainer.nativeElement);
  }
}

export class RToastRef {
  constructor(private readonly toastContainer: RToastContainer,
              private readonly toast: RToast) { }
  close() {
    this.toastContainer.destroy(this.toast);
  }
}

export class RToastContainer {
  private toasts: RToast[] = [];
  private prevToast: RToast;

  constructor(private readonly containerRef: ComponentRef<RToastContainerComponent>) { }

  attach(toast: RToast): RToastRef {
    // if (/** toast.config.preventDuplicates && */this.isDuplicate(toast)) {
    //   return;
    // }
    this.removeToastIfLimitReached(toast);
    const toastComponent: RToastComponent = this.attachToast(toast);
    // if (toast.config.destroyByClick) {
    //   this.subscribeOnClick(toastComponent, toast);
    // }

    if (toast.config.duration) {
    }
    this.setDestroyTimeout(toast);
    this.prevToast = toast;
    return new RToastRef(this, toast);
  }

  attachToast(toast: RToast): RToastComponent {
    this.toasts.unshift(toast);
    this.updateContainer();
    return this.containerRef.instance.toasts.first;
  }

  destroy(toast: RToast) {
    if (this.prevToast === toast) {
      this.prevToast = null;
    }

    this.toasts = this.toasts.filter(t => t !== toast);
    this.updateContainer();
  }

  updateContainer() {
    this.patch(this.containerRef, { content: this.toasts, position: 'top-end' });
  }

  patch<T>(container: ComponentRef<T>, containerContext: any): ComponentRef<T> {
    Object.assign(container.instance, containerContext);
    container.changeDetectorRef.detectChanges();
    return container;
  }

  subscribeOnClick(toastComponent: RToastComponent, toast: RToast) {
    toastComponent.destroy.subscribe(() => this.destroy(toast));
  }

  isDuplicate(toast: RToast): boolean {
    return this.isDuplicateAmongAll(toast);
  }

  isDuplicatePrevious(toast: RToast): boolean {
    return this.prevToast && this.toastDuplicateCompareFunc(this.prevToast, toast);
  }

  isDuplicateAmongAll(toast: RToast): boolean {
    return this.toasts.some(t => this.toastDuplicateCompareFunc(t, toast));
  }

  setDestroyTimeout(toast: RToast) {
    setTimeout(() => this.destroy(toast), 3000);
  }

  toastDuplicateCompareFunc = (t1: RToast, t2: RToast): boolean => {
    return t1.message === t2.message;
  }

  removeToastIfLimitReached(toast: RToast) {
    // if (!toast.config.limit || this.toasts.length < toast.config.limit) {
    //   return;
    // }
    // this.toasts.pop();
  }

  get nativeElement() {
    return this.containerRef.location.nativeElement;
  }
}
