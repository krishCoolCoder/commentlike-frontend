import { Component } from '@angular/core';
import { TitleContentComponent } from './title-content/title-content.component';
import { LoginModelComponent } from './login-model/login-model.component';

@Component({
  selector: 'app-login-page',
  imports: [TitleContentComponent,LoginModelComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
