import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresearchComponent } from './addresearch.component';

describe('AddresearchComponent', () => {
  let component: AddresearchComponent;
  let fixture: ComponentFixture<AddresearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddresearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddresearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
