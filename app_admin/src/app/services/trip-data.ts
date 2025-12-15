import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Trip } from '../models/trip';

import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';


@Injectable({
 providedIn: 'root'
})
export class TripDataService {

 private _tripListUpdatedSource = new Subject<void>();

 tripListUpdated$ = this._tripListUpdatedSource.asObservable();

baseUrl = 'http://localhost:3000/api';

constructor(
  private http: HttpClient,
  @Inject(BROWSER_STORAGE) private storage: Storage
) {}

 public notifyTripListUpdate() {
  this._tripListUpdatedSource.next();
 }

getTrips(): Observable<Trip[]> {
 return this.http.get<Trip[]>(`${this.baseUrl}/trips`);
}

addTrip(formData: Trip) : Observable<Trip> {
 return this.http.post<Trip>(`${this.baseUrl}/trips`, formData);
}

getTrip(tripCode: string) : Observable<Trip> {
 console.log('Inside TripDataService::getTrip');
 return this.http.get<Trip>(`${this.baseUrl}/trips/${tripCode}`);
}

updateTrip(formData: Trip) : Observable<Trip> {
 console.log('Inside TripDataService::updateTrip');
 return this.http.put<Trip>(`${this.baseUrl}/trips/${formData.code}`, formData);
}
 
  // Call to our /login endpoint, returns JWT
  login(user: User, passwd: string) : Observable<AuthResponse> {
  // console.log('Inside TripDataService::login');
  return this.handleAuthAPICall('login', user, passwd);
  }
 
  // Call to our /register endpoint, creates user and returns JWT
  register(user: User, passwd: string) : Observable<AuthResponse> {
  // console.log('Inside TripDataService::register');
  return this.handleAuthAPICall('register', user, passwd);
  }

  // Helper method to handle both login and register calls
  private handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/${endpoint}`, {
      email: user.email,
      name: user.name,
      password: passwd
    });
  }

} // latest UPDATE yuhp