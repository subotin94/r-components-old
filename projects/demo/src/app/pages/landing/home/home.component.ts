import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('action1', { static: false })
  action1: ElementRef<HTMLDivElement>;
  @ViewChild('action1', { static: false })
  action2: ElementRef<HTMLDivElement>;
  transitioning = false;
  activeSections = [true, false];

  constructor() { }

  ngOnInit() {
  }

  isActiveAction(index: number): boolean {
    return this.activeSections[index];
  }

  setActiveAction(index: number): void {
    this.activeSections = this.activeSections.map(i => i = false);
    this.activeSections[index] = true;
  }

  @HostListener('wheel', ['$event'])
  private onScroll($event: WheelEvent):void {
    console.log($event);
  };

}
