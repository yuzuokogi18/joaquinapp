import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseragregarComponent } from './useragregar.component';

describe('UseragregarComponent', () => {
  let component: UseragregarComponent;
  let fixture: ComponentFixture<UseragregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseragregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseragregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
