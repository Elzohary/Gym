import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymClassesComponent } from './Components/Gym-details-Page/gym-classes/gym-classes.component';
import { GymDetailsComponent } from './Components/Gym-details-Page/gym-details-MainComponent/gym-details.component';
import { GymInfoComponent } from './Components/Gym-details-Page/gym-info/gym-info.component';
import { GymPackagesComponent } from './Components/Gym-details-Page/gym-packages/gym-packages.component';
import { GymPhotosComponent } from './Components/Gym-details-Page/gym-photos/gym-photos.component';
import { GymReviewsComponent } from './Components/Gym-details-Page/gym-reviews/gym-reviews.component';
import { HomeComponent } from './Components/home/home.component';
import { HotDealsComponent } from './Components/hot-deals/hot-deals.component';
import { MapComponent } from './Components/map/map.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path: 'Hot-deals', component: HotDealsComponent},
  {path: 'maps', component:MapComponent},
  
  {path: 'Gym-details', component:GymDetailsComponent, children:[
    {path:'gym-info', component:GymInfoComponent},
    {path:'gym-photos', component:GymPhotosComponent},
    {path:'gym-classes', component:GymClassesComponent},
    {path:'gym-packages', component:GymPackagesComponent},
    {path:'gym-reviews', component: GymReviewsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
