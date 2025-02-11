import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-model',
  imports: [],
  templateUrl: './login-model.component.html',
  styleUrl: './login-model.component.css'
})
export class LoginModelComponent {
  constructor (private router : Router) {

  }

  redirectToSignUp() {
    this.router.navigate(["/signup"]);
  }

}
