import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private url = 'http://localhost:3000/api/'; // <-- This is your base URL
  constructor(private http: HttpClient) {}
  

  getTrips(): Observable<Trip[]> {
    // 1. Get the cache-busting timestamp
    const now = (new Date()).getTime();
    
    // 2. Build the FULL URL using this.url and the timestamp
    // You need to append 'trips' to your base URL before adding the query parameter
    const cacheBustingUrl = `${this.url}trips?cache=${now}`; 
    
    // 3. Make the HTTP request using the cache-busting URL
    return this.http.get<Trip[]>(cacheBustingUrl);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(`${this.url}trips`, formData);
  }

  getTrip(tripCode: string) : Observable<Trip> { 
    console.log('Inside TripDataService::getTrip'); 
    return this.http.get<Trip>(`${this.url}trips/${tripCode}`); 
  } 

  updateTrip(formData: Trip) : Observable<Trip> { 
    console.log('Inside TripDataService::updateTrip'); 
    return this.http.put<Trip>(`${this.url}trips/${formData.code}`, formData); 
  }

}
