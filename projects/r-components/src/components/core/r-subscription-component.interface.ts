import { OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

export interface RSubscriptionComponent extends Partial<OnInit>, OnDestroy {
  readonly subs: SubSink;
}
