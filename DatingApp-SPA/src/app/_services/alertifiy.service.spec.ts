/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertifiyService } from './alertifiy.service';

describe('Service: Alertifiy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertifiyService]
    });
  });

  it('should ...', inject([AlertifiyService], (service: AlertifiyService) => {
    expect(service).toBeTruthy();
  }));
});
