import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../model/customer.model';

const headerOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  mockUrl: string = 'http://localhost:3000/customer';

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.mockUrl, headerOptions);
  }
}
