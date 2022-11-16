import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Igym } from '../Models/igym';

@Injectable({
  providedIn: 'root'
})
export class GymsService {

  constructor(private httpClient : HttpClient) { }

  getAllGyms() /* : Observable<Array<Igym>> */
  {
    return this.httpClient.get/* <Array<Igym>> */(
      'https://staging.algym.com/api/v1/gyms?lat=31.2475504&long=29.963676&page_number=1&page_size=1000&search_diameter=1000'
    );
  }
}
