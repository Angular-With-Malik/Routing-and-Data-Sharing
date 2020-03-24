import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manager } from '../../model/manager.model';

const headerOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ManagerService {

  mockUrl: string = 'http://localhost:3000/manager';

  constructor(
    private http: HttpClient
  ) { }

  getAllManager(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.mockUrl, headerOptions);
  }
}
