import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa';
  displayOverlay: string = 'none';
  isPWAInstalled: boolean = false;
  deviceWidth: number = 0;

  constructor() { }

  ngOnInit() {
    this.deviceWidth = screen.width;
    this.isPWAInstalled = window.matchMedia('(display-mode:standalone)').matches;
    console.log(this.deviceWidth)
  }

  showOverlay() {
    this.displayOverlay = 'block'
  }

  hideOverlay() {
    this.displayOverlay = 'none';
  }

}
