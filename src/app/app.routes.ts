import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: "", component: HomeComponent, canActivate:[AuthGuard]},
    {path: "login", component: LoginComponent},

];
