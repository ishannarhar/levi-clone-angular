import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ishan Website';
  myDisabled = true;

  onClick() {
    this.title = 'Anuj Website';
  }
}
