import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {

  status : boolean = true ;
  @Output() ListViewStatus! : EventEmitter<boolean>; 
  constructor() {
    this.ListViewStatus = new EventEmitter<boolean>();
   }

  ngOnInit(): void {
  }

  onViewChange()
  {
    this.status = !this.status;
    this.ListViewStatus.emit(this.status);
  }

}
