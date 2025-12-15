/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-listing',
  imports: [],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing {

}*/

/* issue has to do with import { Trip } from '../models/trip'; and
import { trips } from '../data/trips'; im not sure why but trip breaks
it which is weird. import { Trip } from '../models/trip';*/

/*
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})

export class TripListing implements OnInit {
  trips: Array<any> = trips;

  constructor() {}

  ngOnInit(): void {}
}
*/

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';
import { trips } from '../data/trips';

import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication'; // NEW IMPORT

@Component({
 selector: 'app-trip-listing',
 standalone: true,
 imports: [CommonModule, TripCard],
 templateUrl: './trip-listing.html',
 styleUrl: './trip-listing.css',
 providers: [TripDataService]
})
export class TripListing implements OnInit, OnDestroy {
 trips: Array<any> = trips; // regular method didn't work so I came up with a different working solution.
 message: string = '';

 private tripUpdateSubscription!: Subscription;

 constructor(
 private tripDataService: TripDataService,
 private router: Router,
 private cd: ChangeDetectorRef,
    private authenticationService: AuthenticationService // NEW INJECTION
 ) {
 console.log('trip-listing constructor');

 this.tripUpdateSubscription = this.tripDataService.tripListUpdated$.subscribe(() => {
 this.getStuff(); // Reload data when the signal is received
 });
 }

 public addTrip(): void{
 this.router.navigate(['add-trip']);
 }

  // NEW METHOD to check login status
  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

 private getStuff(): void {
 this.tripDataService.getTrips().subscribe({
 next: (value: Trip[]) => {
 this.trips = value;

 if (value.length > 0) {
 this.message = 'There are ' + value.length + ' trips available.';
 } else {
 this.message = 'There were no trips retrieved from the database';
 }

 this.cd.detectChanges(); // THIS FIXED IT! 10 HOURS OF DEBUGGING FINALLY!!!!!!

 console.log(this.message);
 },
 error: (error: any) => {
 console.log('Error: ' + error);
 }
 });
 }

 ngOnInit(): void {
 console.log('ngOnInit');
 this.getStuff();
 }

 ngOnDestroy(): void {
 if (this.tripUpdateSubscription) {
 this.tripUpdateSubscription.unsubscribe();
 }
 }
}