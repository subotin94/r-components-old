import { OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { SubSink } from 'subsink';

export interface RSubscriptionComponent extends
                 Partial<OnInit>,
                 Partial<AfterContentInit>,
                 Partial<AfterViewInit>,
                 OnDestroy {
  readonly subs: SubSink;
}
