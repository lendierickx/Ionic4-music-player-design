import { TestBed } from '@angular/core/testing';

import { PushServiceService } from './push-service.service';

describe('PushServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushServiceService = TestBed.get(PushServiceService);
    expect(service).toBeTruthy();
  });
});
