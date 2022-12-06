import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResComponent } from './dashboard-res.component';

describe('DashboardResComponent', () => {
  let component: DashboardResComponent;
  let fixture: ComponentFixture<DashboardResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
