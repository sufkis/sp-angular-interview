import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormPageComponent } from './address-form-page.component';

describe('AddressFormPageComponent', () => {
  let component: AddressFormPageComponent;
  let fixture: ComponentFixture<AddressFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
