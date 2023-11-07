import { TestBed } from '@angular/core/testing';

import { XyentaService } from './xyenta.service';

describe('XyentaService', () => {
  let service: XyentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XyentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
