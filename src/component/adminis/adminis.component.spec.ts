import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminisComponent } from './adminis.component';

describe('AdminisComponent', () => {
  let component: AdminisComponent;
  let fixture: ComponentFixture<AdminisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
