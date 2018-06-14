import { Component } from '@angular/core';
import { InforService } from './service/infor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  profile= {};

  constructor(private infor: InforService) {
    //this.infor.getUser().subscribe(res => {this.profile = res.json()});
    this.infor.getUser().subscribe(profile => {
      this.profile = profile})
  }
}

