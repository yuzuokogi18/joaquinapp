import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerresetaComponent } from './verreseta.component';

describe('VerresetaComponent', () => {
  let component: VerresetaComponent;
  let fixture: ComponentFixture<VerresetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerresetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerresetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
