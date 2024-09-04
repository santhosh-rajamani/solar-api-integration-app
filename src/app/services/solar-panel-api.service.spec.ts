import { TestBed } from '@angular/core/testing';

import { SolarPanelAPIService } from './solar-panel-api.service';

describe('SolarPanelAPIService', () => {
  let service: SolarPanelAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarPanelAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
