import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  constructor(private bs: Router) {}

  username: any;

  // ✅ Logout function
  logoutUser() {
    localStorage.clear();
    this.bs.navigateByUrl("/login");
  }

  // ✅ Check admin login
  ngOnInit() {
    if (localStorage.getItem("role") === "admin") {
      this.username = localStorage.getItem("userloggedin");
    } else {
      this.bs.navigateByUrl("/login");
    }
  }
}
