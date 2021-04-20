import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})

export class SuportePage {

  nome;
  unidade;
  bloco;
  telefone;
  texto;

  private endPoint;

  constructor(private http: HttpClient) {
    this.http = http;
    this.endPoint = `${environment.backendUrl}`;
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   
  create() {
      let data = JSON.stringify ({
        nome: this.nome, unidade: this.unidade, bloco: this.bloco, telefone: this.telefone, texto: this.texto 
      });
      this.http.post(this.endPoint + '/suporte', data, this.httpOptions).subscribe(data => { }, error => {
        console.log(error)
      });
    }

}
