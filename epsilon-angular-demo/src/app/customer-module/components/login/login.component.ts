import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/customer-module/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'epsln-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {}
  showErrors: boolean = false;
  showPassword: boolean = false;

  constructor(private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  get passwordTfType() {
    return this.showPassword ? 'text' : 'password';
  }

  async login(frm) {
    if (frm.valid) {
      try {
        let { email, password } = this.user;
        let resp = await this.auth.login(email, password)
        // promise resolved
        sessionStorage.setItem('token', resp['token']);
        sessionStorage.setItem('username', resp['name']);

        this.activatedRoute.queryParams.subscribe(qp => {
          if ('redirect' in qp) {
            this.router.navigate([qp['redirect']]);
          }
          else {
            this.router.navigate(['/']);
          }
        })

      } catch (err) {
        // promise rejected
        alert('Invalid username/password');
      }

    }
    else {
      this.showErrors = true;
    }
  }
}
