import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer-module/model/customer';
import { log } from 'util';
import { AuthService } from 'src/app/customer-module/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'epsln-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cust: Customer = new Customer();
  c_password: string = '';

  showPassword: boolean = false; // mapped to a checkbox

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  get passwordTfType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  get passwordsMatch(): boolean {
    return this.cust.password === this.c_password;
  }

  register() {
    this.auth.register(this.cust)
      .subscribe(resp => { 
        // 1. store the token in sessionStorage
        sessionStorage.setItem('token', resp['token']);
        sessionStorage.setItem('username', resp['name']);
        // 2. redirect the user to an appropriate page (succes, home, ..)
        this.router.navigate(['/']);
        // 3. optionally display an alert feedback (sweetalert or toastr)
      });
  }

}
