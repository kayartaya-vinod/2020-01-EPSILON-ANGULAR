import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/customer-module/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'epsln-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  cf: FormGroup;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {

    this.cf = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', Validators.required),
      phone: new FormControl(),
      houseNo: new FormControl(),
      street: new FormControl(),
      area: new FormControl(''),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      pincode: new FormControl(),
    });

    if (this.auth.isAuthenticated) {
      this.auth.getProfile()
        .subscribe(c => {
          delete c.id;
          // this.cf.setValue(c); // expects all values corresponding to the form controls
          this.cf.patchValue(c); // applies which ever values available
        });
    }
    else {
      this.router.navigate(['/login'], { queryParams: { redirect: '/customer/edit-profile' } })
    }
  }

  updateChanges() {
    this.auth.updateProfile(this.cf.value)
      .subscribe(() => this.router.navigate(['/customer/view-profile']), console.error);
  }

}
