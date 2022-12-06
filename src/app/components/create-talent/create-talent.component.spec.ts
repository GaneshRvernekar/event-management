import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTalentComponent } from './create-talent.component';

describe('CreateTalentComponent', () => {
  let component: CreateTalentComponent;
  let fixture: ComponentFixture<CreateTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTalentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
