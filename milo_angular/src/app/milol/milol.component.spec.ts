import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MILOLComponent } from './milol.component';

describe('MILOLComponent', () => {
  let component: MILOLComponent;
  let fixture: ComponentFixture<MILOLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MILOLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MILOLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
