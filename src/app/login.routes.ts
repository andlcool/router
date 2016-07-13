/**
 * Created by Slevin on 10/7/2016.
 */
import { RouterConfig }       from '@angular/router';
import { AuthGuard }          from './auth.guard';
import { AuthService }        from './auth.service';
import { LoginComponent }     from './login.component';

export const LoginRoutes: RouterConfig = [
  { path: 'login', component: LoginComponent }
];
export const AUTH_PROVIDERS = [AuthGuard, AuthService];
