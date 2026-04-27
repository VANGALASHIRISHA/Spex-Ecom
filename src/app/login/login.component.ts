import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private rou: Router) {}

  username: any;
  password: any;

  checkLogin() {

    if (!this.username || !this.password) {
      Swal.fire("Error", "Enter username & password", "warning");
      return;
    }

    // 👑 ADMIN LOGIN
    if (this.username === 'admin' && this.password === 'admin12345') {

      localStorage.setItem("userloggedin", this.username);
      localStorage.setItem("role", "admin");

      Swal.fire({
        title: "Admin Login Successful",
        text: "Welcome Admin",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });

      setTimeout(() => {
        this.rou.navigateByUrl("/admindashboard");
      }, 1500);

      return;
    }

    // 👤 USER LOGIN
    localStorage.setItem("userloggedin", this.username);
    localStorage.setItem("role", "user");

    Swal.fire({
      title: "Login Successful",
      text: "Welcome User",
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    });

    setTimeout(() => {
      this.rou.navigateByUrl("/dashboard");
    }, 1500);
  }
}