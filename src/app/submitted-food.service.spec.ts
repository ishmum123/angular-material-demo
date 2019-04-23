import { TestBed } from '@angular/core/testing';

import { SubmittedFoodService } from './submitted-food.service';

describe('SubmittedFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmittedFoodService = TestBed.get(SubmittedFoodService);
    expect(service).toBeTruthy();
  });
});
