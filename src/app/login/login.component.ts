import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

 

  constructor(private router:Router){}



  Login() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      Swal.fire('Please fill in all fields', '', 'error');
      return;
    }
    Swal.fire('Logged in successfully!', '', 'success');
    this.username = '';
    this.password = '';
    this.router.navigateByUrl('home')
  }

}
