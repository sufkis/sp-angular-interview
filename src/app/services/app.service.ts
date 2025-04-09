import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

interface IAddress {
  username: string,
  city: string | null
}

export type City =  {
  id: string;
  name: string;
}

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  protected http = inject(HttpClient);

  address = signal<IAddress>({
    username: '',
    city: null
  });

  changeAddress(newAddress: IAddress) {
    this.address.set(newAddress);
  }

  getCities(): Observable<City[]> {
    const response = this.http.get<City[]>(API_URL + '/cities');
    return response;
  }

  sendAddress(address: IAddress): Observable<IAddress> {
    const response = this.http.post<IAddress>(API_URL + '/submit', address);
    return response;
  }
}
