import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HomeComponent } from '../Pages/home/home.component';
import { MainBarComponent } from '../Pages/home/Components/main-bar/main-bar.component';
import { GymListComponent } from '../Pages/home/Components/gym-list/gym-list.component';
import { HotDealsComponent } from '../Pages/hot-deals/hot-deals.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { MapComponent } from '../Pages/home/Components/map/map.component';
import { GymDetailsComponent } from '../Pages/gym-details/gym-details.component';
import { GymDetailsHeaderComponent } from '../Pages/gym-details/Components/gym-header/gym-details-header.component';
import { GymInfoComponent } from '../Pages/gym-details/Components/gym-info/gym-info.component';
import { GymPhotosComponent } from '../Pages/gym-details/Components/gym-photos/gym-photos.component';
import { GymClassesComponent } from '../Pages/gym-details/Components/gym-classes/gym-classes.component';
import { GymPackagesComponent } from '../Pages/gym-details/Components/gym-packages/gym-packages.component';
import { GymReviewsComponent } from '../Pages/gym-details/Components/gym-reviews/gym-reviews.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GoogleMapsModule} from '@angular/google-maps';
import { GymsService } from './Services/gyms.service';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';



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
    FooterComponent,
    ForgotPasswordComponent
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
