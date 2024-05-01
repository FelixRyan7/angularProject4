import { TestBed } from '@angular/core/testing';

import { DatosPlayersService } from './datos-players.service';

describe('DatosPlayersService', () => {
  let service: DatosPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
