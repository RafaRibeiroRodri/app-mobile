import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private toastr: ToastController) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(4), Validators.required]]
    });
  }

  async login(values: {email: string, password: string}) {
    if (this.loginForm.valid) {
      localStorage.setItem('user', JSON.stringify(values));
      console.log('teste')
      await this.router.navigate(['home', 'dashboard']);
    } else {
      await this.toastr.create({
        message: 'Usuário e senha incorretos'
      });
    }
  }


}
