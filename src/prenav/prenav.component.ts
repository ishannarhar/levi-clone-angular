declare var require: any;
const imgname = require('./assets/indiaFlagIcon.png').default as string;
import { Component } from '@angular/core';
@Component({
  selector: 'app-prenav',
  templateUrl: './prenav.component.html',
  styleUrls: ['./prenav.component.css'],
})
export class PrenavComponent {
  imgname = imgname;
}
