import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit,OnChanges {

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  @Input() passData;

  users = {
    femaleUsers: [],
    maleUsers: []
  }

  barValue;

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.users.femaleUsers = this.passData.filter(item => item.gender == 'Female');
    this.users.maleUsers = this.passData.filter(item => item.gender == 'Male');
    this.barValue = this.passData.length * 10;
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.users.femaleUsers = this.passData.filter(item => item.gender == 'Female');
    this.users.maleUsers = this.passData.filter(item => item.gender == 'Male');
    this.barValue = this.passData.length * 10;
  }

}
