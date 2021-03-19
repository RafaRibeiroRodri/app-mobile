import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `<ion-router-outlet></ion-router-outlet>`,
  selector: 'app-home'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  async ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      await this.router.navigate(['home', 'dashboard']);
    }
  }

}
