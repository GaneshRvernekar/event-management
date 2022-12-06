import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/authentication/auth-service.service';

@Component({
  selector: 'app-dashboard-res',
  templateUrl: './dashboard-res.component.html',
  styleUrls: ['./dashboard-res.component.css'],
})
export class DashboardResComponent implements OnInit {
  constructor(public Aservice: AuthServiceService) {}
  isAuth = false;
  display = true;
  ngOnInit(): void {
    this.isAuth = this.Aservice.getIsAuth();
  }
  search: String = '';
  toggleSidebar() {
    this.display = !this.display;
  }
}
