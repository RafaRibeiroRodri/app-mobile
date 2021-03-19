import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user;

  dashboardItems: {routerLink: string, title: string, icon: string}[] = [
    {routerLink: '', title: 'Reservas', icon: 'list'}
  ];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  async logout() {
    localStorage.removeItem('user');
    await this.router.navigate(['login']);
  }
}
