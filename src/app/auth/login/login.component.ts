import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = "";
  password = "";

  constructor(private authService: AuthService){}
  login(){
    this.authService.login({username: this.username, password: this.password})
  }
}
