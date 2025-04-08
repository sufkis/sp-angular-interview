import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../../services/app.service';
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
export class AddressFormPageComponent {
  protected appService = inject(AppService);
  protected router = inject(Router);

  cities = [
    { id: '1', name: 'Jerusalem' },
    { id: '2', name: 'Tel Aviv' },
    { id: '3', name: 'Haifa' },
    { id: '4', name: 'Eilat' },
    { id: '5', name: 'Ashdod' },
    { id: '6', name: 'Beersheba' },
    { id: '7', name: 'Nazareth' },
    { id: '8', name: 'Netanya' },
    { id: '9', name: 'Petah Tikva' },
    { id: '10', name: 'Rishon LeZion' },
    { id: '11', name: 'Haifa' },
    { id: '12', name: 'Afula' },
    { id: '13', name: 'Kiryat Shmona' },
    { id: '14', name: 'Rehovot' },
    { id: '15', name: 'Hadera' },
    { id: '16', name: 'Bat Yam' },
    { id: '17', name: 'Herzliya' },
    { id: '18', name: 'Kfar Saba' },
    { id: '19', name: 'Ramat Gan' },
    { id: '20', name: 'Holon' },
  ];

  addressForm = new FormGroup({
    username: new FormControl(''),
    city: new FormControl(null)
  });

  onFormSubmit() {
    const { username, city } = this.addressForm.getRawValue();
    if (username?.trim() !== '' && username !== null && city !== null) {
      this.appService.changeAddress({ username, city });
      this.router.navigate(['/confirmation']);
    }
  }
}
