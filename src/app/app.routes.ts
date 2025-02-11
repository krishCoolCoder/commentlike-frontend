import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routes: Routes = [
    // {
    //     path : "",
    //     component : LoginPageComponent
    // }, 
    {
        path : "login",
        component : LoginPageComponent
    }, 
    {
        path: "signup",
        component : SignUpPageComponent
    }, 
    {
        path: "forgotpassword",
        component : ForgotPasswordComponent
    }
];
