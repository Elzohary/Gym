import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Igym } from 'src/app/Models/igym';
import { GymsService } from 'src/app/Services/gyms.service';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.css']
})
export class HotDealsComponent implements OnInit, OnDestroy {

  gymList : Array<Igym> | undefined;
  gymSubscription: Subscription | undefined ;
  
  constructor(private gymService : GymsService) { }

  ngOnInit(): void {
    this.filterGymByHotDeal()
  }

  filterGymByHotDeal() {

    this.gymSubscription = this.gymService.getAllGyms().subscribe((_gyms)=>{
      let list = _gyms.data;
      this.gymList= list.filter(gym=> gym.is_hot_deal == true);
    });
  }

  ngOnDestroy(): void {
    this.gymSubscription?.unsubscribe();
  }

}
