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
    {routerLink: '', title: 'Reservas', icon: 'calendar-number-outline'},
    {routerLink: 'mural', title: 'Mural de Noticias', icon: 'clipboard-outline'},
    {routerLink: 'suporte', title: 'Suporte', icon: 'chatbubbles-outline'},
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
