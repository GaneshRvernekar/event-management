import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitsnbytesComponent } from './bitsnbytes.component';

describe('BitsnbytesComponent', () => {
  let component: BitsnbytesComponent;
  let fixture: ComponentFixture<BitsnbytesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitsnbytesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitsnbytesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
