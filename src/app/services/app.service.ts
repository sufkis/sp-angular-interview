import { Injectable, signal } from '@angular/core';

interface IAddress {
  username: string,
  city: string | null
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  address = signal<IAddress>({
    username: '',
    city: null
  });

  changeAddress(newAddress: IAddress) {
    this.address.set(newAddress);
  }
}
