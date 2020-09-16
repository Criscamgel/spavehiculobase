import { TestBed } from '@angular/core/testing';

import { MultidominioService } from './multidominio.service';

describe('MultidominioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultidominioService = TestBed.get(MultidominioService);
    expect(service).toBeTruthy();
  });
});
