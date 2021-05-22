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
    {routerLink: 'dados', title: 'Dados Pessoais', icon: 'person-outline'},
    {routerLink: 'mural', title: 'Mural de Noticias', icon: 'clipboard-outline'},
    {routerLink: 'suporte', title: 'Suporte', icon: 'chatbubbles-outline'},
    {routerLink: 'reservas', title: 'Reservas', icon: 'calendar-outline'},
  ];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log("user", this.user);
  }

  async logout() {
    localStorage.removeItem('user');
    await this.router.navigate(['login']);
  }
}
