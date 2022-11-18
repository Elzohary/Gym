import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymClassesComponent } from '../Pages/gym-details/Components/gym-classes/gym-classes.component';
import { GymDetailsComponent } from '../Pages/gym-details/gym-details.component';
import { GymInfoComponent } from '../Pages/gym-details/Components/gym-info/gym-info.component';
import { GymPackagesComponent } from '../Pages/gym-details/Components/gym-packages/gym-packages.component';
import { GymPhotosComponent } from '../Pages/gym-details/Components/gym-photos/gym-photos.component';
import { GymReviewsComponent } from '../Pages/gym-details/Components/gym-reviews/gym-reviews.component';
import { HomeComponent } from '../Pages/home/home.component';
import { HotDealsComponent } from '../Pages/hot-deals/hot-deals.component';
import { MapComponent } from '../Pages/home/Components/map/map.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path: 'Hot-deals', component: HotDealsComponent},
  {path: 'maps', component:MapComponent},
  
  {path: 'Gym-details/:gymId', component:GymDetailsComponent, children:[
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
