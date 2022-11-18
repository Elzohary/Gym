import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Igym } from 'src/app/Models/igym';
import { GymsService } from 'src/app/Services/gyms.service';
import { GymDetailsComponent } from '../../gym-details.component';

@Component({
  selector: 'app-gym-details-header',
  templateUrl: './gym-details-header.component.html',
  styleUrls: ['./gym-details-header.component.css']
})
export class GymDetailsHeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  gym : Igym | undefined;
  currentGymId: number = 0;

  @ViewChild('stars') stars! : ElementRef;
  constructor(private gymService : GymsService) { 
  }

  ngOnInit(): void {
    this.gym = this.gymService.currentGym;    
  }

  ngAfterViewInit(): void {
    this.ratingPercentage();
  }

  ratingPercentage() {
    if(this.gym?.rate) {
      let starPercentage = (this.gym?.rate / 5) * 100;
      console.log(starPercentage);

      let starPercentageRounded = `${Math.round(starPercentage)}%`;
      console.log(starPercentageRounded);
      this.stars.nativeElement.style.width = `${starPercentageRounded}`;
    }
    else {
      this.stars.nativeElement.style.width = '0';
    }
  }

  ngOnDestroy(): void {
    this.gymService.ngOnDestroy();
  }


}
