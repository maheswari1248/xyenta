import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezonesComponent } from './timezones.component';

describe('TimezonesComponent', () => {
  let component: TimezonesComponent;
  let fixture: ComponentFixture<TimezonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimezonesComponent]
    });
    fixture = TestBed.createComponent(TimezonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
