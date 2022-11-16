import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { MainBarComponent } from './Components/main-bar/main-bar.component';
import { GymListComponent } from './Components/gym-list/gym-list.component';
import { HotDealsComponent } from './Components/hot-deals/hot-deals.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { MapComponent } from './Components/map/map.component';
import { GymDetailsComponent } from './Components/Gym-details-Page/gym-details-MainComponent/gym-details.component';
import { GymDetailsHeaderComponent } from './Components/Gym-details-Page/gym-details-header/gym-details-header.component';
import { GymInfoComponent } from './Components/Gym-details-Page/gym-info/gym-info.component';
import { GymPhotosComponent } from './Components/Gym-details-Page/gym-photos/gym-photos.component';
import { GymClassesComponent } from './Components/Gym-details-Page/gym-classes/gym-classes.component';
import { GymPackagesComponent } from './Components/Gym-details-Page/gym-packages/gym-packages.component';
import { GymReviewsComponent } from './Components/Gym-details-Page/gym-reviews/gym-reviews.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GoogleMapsModule} from '@angular/google-maps';
import { GymsService } from './Services/gyms.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    MainBarComponent,
    GymListComponent,
    HotDealsComponent,
    SignInComponent,
    SignUpComponent,
    MapComponent,
    GymDetailsComponent,
    GymDetailsHeaderComponent,
    GymInfoComponent,
    GymPhotosComponent,
    GymClassesComponent,
    GymPackagesComponent,
    GymReviewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GymsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
