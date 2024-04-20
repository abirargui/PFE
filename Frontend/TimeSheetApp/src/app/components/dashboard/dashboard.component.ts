import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    totalUsers: number = 100;
    totalOrders: number = 500;
    totalSales: number = 10000;
    totalProducts: number = 200;
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
  
  
 

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
