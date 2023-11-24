/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DinosuariosService } from './dinosuarios.service';

describe('Service: Dinosuarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinosuariosService]
    });
  });

  it('should ...', inject([DinosuariosService], (service: DinosuariosService) => {
    expect(service).toBeTruthy();
  }));
});
