import {Component, Input, OnInit} from '@angular/core';
import {TABS} from '../../model/TABS';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input()TABS;
  selectedSystem: string;


  constructor() {
  }

  ngOnInit() {
    console.log(this.TABS);
    /*this.selectedSystem = this.TABS[0].name;*/
  }

  setSelectedSystem(system:string) {
    this.selectedSystem = system;
  }

  updateInput() {
    switch (this.selectedSystem) {
    }
  }
}
