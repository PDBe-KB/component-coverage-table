import {Component} from '@angular/core';
import {MOCKDATA} from '../mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;

  constructor() {
    this.data = MOCKDATA;
  }
}
