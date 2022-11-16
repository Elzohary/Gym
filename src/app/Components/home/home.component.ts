import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isListView : boolean = false;  //to switch between map view and GymList view (Received from 'main-bar' Component)

  constructor() { }

  ngOnInit(): void {
  }

  onViewChange(status: boolean)
  {
    this.isListView = status;
  }
 
}
