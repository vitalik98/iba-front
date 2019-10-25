import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TABS} from './model/TABS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'terminal-project';
  myUrl:string = "http://localhost:8080/MyApp/subsystems/";
  TABS: TABS;
  constructor(public httpClient: HttpClient) {
    this.httpClient.get(this.myUrl).subscribe((tabs:TABS)=>{
      this.TABS = tabs;
    });
  }
}
