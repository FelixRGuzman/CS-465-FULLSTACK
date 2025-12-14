import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Trip } from '../models/trip';


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private _tripListUpdatedSource = new Subject<void>();
  
  tripListUpdated$ = this._tripListUpdatedSource.asObservable(); 

 private url = 'http://localhost:3000/api/';
 constructor(private http: HttpClient) {}
 
  public notifyTripListUpdate() {
    this._tripListUpdatedSource.next(); 
  }

 getTrips(): Observable<Trip[]> {
   return this.http.get<Trip[]>(`${this.url}trips`);
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

} // latest UPDATE yuhp