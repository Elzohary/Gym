import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-gym-details',
  templateUrl: './gym-details.component.html',
  styleUrls: ['./gym-details.component.css']
})
export class GymDetailsComponent implements OnInit {

  constructor(private route : Router) {
    route.navigateByUrl('/Gym-details/gym-info');
   }

  ngOnInit(): void {
  }

}
