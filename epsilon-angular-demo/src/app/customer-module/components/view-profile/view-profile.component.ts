import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer-module/model/customer';
import { AuthService } from 'src/app/customer-module/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'epsln-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {

    if (!this.auth.isAuthenticated) {
      this.router.navigate(['/login'],
        { queryParams: { redirect: '/customer/view-profile' } })
    }
    else {
      this.auth.getProfile().subscribe(c => this.customer = c);
    }
  }

}
