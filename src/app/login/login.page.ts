import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  private endPoint;
  email;
  senha;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private toastr: ToastController,
              private http: HttpClient) {

    this.endPoint = `${environment.backendUrl}`;
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(4), Validators.required]]
    });
  }

  login(values: {email: string, password: string}) {
    let data = JSON.stringify ({
      email: values.email, 
      senha: values.password
    });
    if (this.loginForm.valid) {
      this.http.post(this.endPoint + '/morador/login', data, this.httpOptions).subscribe((data: any) => { 
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data.morador[0]));
        this.router.navigate(['home', 'dashboard']);
      }, error => {
        console.log(error)
      });
    } else {
      this.toastr.create({
        message: 'Usuário e senha incorretos'
      });
    }
  }


}
