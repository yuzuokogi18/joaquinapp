import { TestBed } from '@angular/core/testing';
import { PlanificadoresService } from './PlanificadoresService'; 

describe('PlanificadoresService', () => { 
  let service: PlanificadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanificadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
