import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Igym } from 'src/app/Models/igym';
import { GymsService } from 'src/app/Services/gyms.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gym-details',
  templateUrl: './gym-details.component.html',
  styleUrls: ['./gym-details.component.css']
})
export class GymDetailsComponent implements OnInit, OnDestroy {

  currentGymId : number = 0

  constructor(private route : Router,
              private activatedRoute: ActivatedRoute,
              private gymService: GymsService,
              private httpClient: HttpClient,) {
    /* route.navigateByUrl('/Gym-details/gym-info'); */
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentGymId = Number(paramMap.get('gymId'));
    });

  }

  ngOnDestroy(): void {
  }
}
