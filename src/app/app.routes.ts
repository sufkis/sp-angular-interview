import { Routes } from '@angular/router';
import { AddressFormPageComponent } from './components/address-form-page/address-form-page.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';

export const routes: Routes = [
  { path: 'address', component: AddressFormPageComponent },
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: '',   redirectTo: '/address', pathMatch: 'full' }
];
