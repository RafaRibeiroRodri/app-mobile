import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Location} from '@angular/common';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})

export class ReservaPage {

  nome;
  unidade;
  bloco;
  telefone;
  texto;
  area;
  reserva_data;
  areas;

  private endPoint;

  constructor(private http: HttpClient, private location: Location) {
    this.endPoint = `${environment.backendUrl}`;
    this.get();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   
  get() {
    this.http.get(this.endPoint + '/areas').subscribe((data: any) => { this.areas = data.areas})
  }

  create() {
      let data = JSON.stringify ({
        nome: this.nome, unidade: this.unidade, bloco: this.bloco, telefone: this.telefone, area: this.area, reserva_data: this.reserva_data 
      });
      this.http.post(this.endPoint + '/reservas', data, this.httpOptions).subscribe(data => { 
        console.log(data);
        this.location.back();
      }, error => {
        console.log(error)
      });
    }

}
