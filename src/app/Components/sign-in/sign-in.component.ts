import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isForgotPassword: boolean = true;
  isVisible: boolean = true;

  constructor() {
   }

  ngOnInit(): void {
  }

  onIsVisible() {
    this.isVisible = !this.isVisible;
  }

  onForgotChange()
  {
    this.isForgotPassword = !this.isForgotPassword;
  }

}
