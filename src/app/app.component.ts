import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa';
  displayOverlay: string = 'none';

  constructor() { }

  showOverlay() {
    this.displayOverlay = 'block'
  }

  hideOverlay() {
    this.displayOverlay = 'none';
  }

}
