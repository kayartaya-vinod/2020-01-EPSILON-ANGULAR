import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUrl, customersUrl } from 'src/urls';

import 'rxjs/add/operator/do';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: string;

  constructor(private http: HttpClient,
    private router: Router) { }

  getProfile(): Observable<Customer> {
    return this.http.get(customersUrl).map(resp => resp as Customer);
  }

  updateProfile(c: Customer): Observable<any> {
    return this.http.put(customersUrl, c);
  }

  login(email: string, password: string): Promise<any> {
    const payload = { email, password };
    return this.http.post(loginUrl, payload).do(console.log).toPromise();
  }

  register(customer: Customer): Observable<any> {
    return this.http.post(customersUrl, customer).do(console.log);
  }

  // readonly property (variable)
  get isAuthenticated() {
    this.loggedInUser = sessionStorage['username'];
    return 'token' in sessionStorage;
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
