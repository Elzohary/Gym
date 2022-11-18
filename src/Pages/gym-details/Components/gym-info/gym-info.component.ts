import { Component, OnInit } from '@angular/core';
import { Igym } from 'src/app/Models/igym';
import { GymsService } from 'src/app/Services/gyms.service';

@Component({
  selector: 'app-gym-info',
  templateUrl: './gym-info.component.html',
  styleUrls: ['./gym-info.component.css']
})
export class GymInfoComponent implements OnInit {

  gym : Igym | undefined;


  constructor(private gymService : GymsService) { }

  ngOnInit(): void {
    this.gym = this.gymService.currentGym;
  }

}
