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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';
import { trips } from '../data/trips';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: [TripDataService]
})
export class TripListing implements OnInit {
  trips: Array<any> = trips;
  message: string = '';

  /*

  trips!: Trip[]; THIS DOESNT WORK NO MATTER HOW HARD I TRY

  */

  constructor(private tripDataService: TripDataService) {
    console.log('trip-listing constructor');
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
}
