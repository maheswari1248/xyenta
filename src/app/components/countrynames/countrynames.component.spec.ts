import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrynamesComponent } from './countrynames.component';

describe('CountrynamesComponent', () => {
  let component: CountrynamesComponent;
  let fixture: ComponentFixture<CountrynamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrynamesComponent]
    });
    fixture = TestBed.createComponent(CountrynamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
