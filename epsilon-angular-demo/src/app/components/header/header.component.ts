import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/customer-module/services/auth.service';

@Component({
  selector: 'epsln-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
