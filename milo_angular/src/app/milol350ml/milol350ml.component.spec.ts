import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MILOL350mlComponent } from './milol350ml.component';

describe('MILOL350mlComponent', () => {
  let component: MILOL350mlComponent;
  let fixture: ComponentFixture<MILOL350mlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MILOL350mlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MILOL350mlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
