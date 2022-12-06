import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekforgeeksComponent } from './geekforgeeks.component';

describe('GeekforgeeksComponent', () => {
  let component: GeekforgeeksComponent;
  let fixture: ComponentFixture<GeekforgeeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekforgeeksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeekforgeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
