import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Igym, Igyms } from '../Models/igym';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GymsService implements OnInit, OnDestroy {
  gymList! : Array<Igym>;
  gymSubscription: Subscription | undefined ;
  currentGymId : number = 0
  gym! : Igym | undefined;
  currentGym!: Igym | undefined;

  constructor(private httpClient : HttpClient) {
  }

  ngOnInit(): void {
  }

  getAllGyms()  : Observable<Igyms>
  {
    return this.httpClient.get<Igyms>(
      'https://staging.algym.com/api/v1/gyms?lat=31.2475504&long=29.963676&page_number=1&page_size=1000&search_diameter=1000'
    );
  }

  getGymById(id : number) : Igym | undefined  {
    this.gymSubscription = this.getAllGyms().subscribe((_gyms)=>{
      this.gymList = _gyms.data;
      this.gym= this.gymList.find(gym=> gym.id == id);      
    });
    return this.gym;
  }

  ngOnDestroy(): void {
    this.gymSubscription?.unsubscribe();
  }
}
