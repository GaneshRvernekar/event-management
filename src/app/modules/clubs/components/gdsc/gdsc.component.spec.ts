import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdscComponent } from './gdsc.component';

describe('GdscComponent', () => {
  let component: GdscComponent;
  let fixture: ComponentFixture<GdscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
