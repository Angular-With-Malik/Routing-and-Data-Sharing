import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';

const headerOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  mockUrl: string = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.mockUrl, headerOptions);
  }
}
