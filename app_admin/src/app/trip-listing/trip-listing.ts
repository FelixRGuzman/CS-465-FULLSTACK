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

