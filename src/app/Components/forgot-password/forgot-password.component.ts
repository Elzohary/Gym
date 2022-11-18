import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  isForgotPassword: boolean;

  constructor(private signInService : SignInComponent) { 
    this.isForgotPassword = this.signInService.isForgotPassword;
  }

  ngOnInit(): void {
  }

}
