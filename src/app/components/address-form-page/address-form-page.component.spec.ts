import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormPageComponent } from './address-form-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddressFormPageComponent', () => {
  let component: AddressFormPageComponent;
  let fixture: ComponentFixture<AddressFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressFormPageComponent, HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        AppService,
        { provide: Router, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable the submit button when the form becomes valid', () => {
    const submitButton = fixture.debugElement.nativeElement.querySelector('#submit-button');
    expect(submitButton.disabled).toBeTrue();
    component.addressForm.controls['username'].setValue('Shoshana');
    component.addressForm.controls['city'].setValue('Jerusalem');
    fixture.detectChanges();
    expect(submitButton.disabled).toBeFalse();
  });

  it('should disable the submit button when the form becomes invalid again', () => {
    const submitButton = fixture.debugElement.nativeElement.querySelector('#submit-button');
    expect(submitButton.disabled).toBeTrue();
    component.addressForm.controls['username'].setValue('Miriam');
    component.addressForm.controls['city'].setValue('Tel Aviv');
    fixture.detectChanges();
    expect(submitButton.disabled).toBeFalse();
    component.addressForm.controls['username'].setValue('');
    fixture.detectChanges();
    expect(submitButton.disabled).toBeTrue();
  });
});
