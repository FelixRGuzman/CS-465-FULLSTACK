// authentication.spec.ts

import { TestBed } from '@angular/core/testing';

// FIX: Change 'Authentication' to 'AuthenticationService'
import { AuthenticationService } from './authentication'; 

describe('AuthenticationService', () => { // It is good practice to update the describe name as well
 let service: AuthenticationService; // FIX: Change type to AuthenticationService

 beforeEach(() => {
  TestBed.configureTestingModule({});
  // FIX: Inject the correct service class
  service = TestBed.inject(AuthenticationService); 
 });

 it('should be created', () => {
  expect(service).toBeTruthy();
 });
});