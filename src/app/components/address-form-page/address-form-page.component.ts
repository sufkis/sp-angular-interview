import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService, City } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './address-form-page.component.html',
  styleUrl: './address-form-page.component.scss'
})
export class AddressFormPageComponent implements OnInit {
  protected appService = inject(AppService);
  protected router = inject(Router);

  cities: City[] = [];

  addressForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    city: new FormControl<string | null>(null, [Validators.required])
  });

  ngOnInit() {
    this.appService.getCities().subscribe(data => {
      this.cities = data;
    })
  }

  onFormSubmit() {
    const { username, city } = this.addressForm.getRawValue();
    if (username?.trim() !== '' && username !== null && city !== null) {
      this.appService.changeAddress({ username, city });
      this.router.navigate(['/confirmation']);
    }
  }
}
