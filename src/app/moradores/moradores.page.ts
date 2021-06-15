import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.page.html',
  styleUrls: ['./moradores.page.scss'],
})
export class MoradoresPage {

  private endPoint;
  moradores: {
      idades: {
          jovens,
          adultos,
          idosos
      },
      generos: {
          masc,
          fem,
          nIdent
      },
      total
  };

  constructor(private http: HttpClient,) {
    this.http = http;
    this.endPoint = `${environment.backendUrl}`;
    this.get();
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  get() {
    this.http.get(this.endPoint + `/morador/dados`).subscribe((data: any) => {
      console.log('data', data);
      this.moradores = {
          idades: {
              jovens: data.moradores.idades.jovens,
              adultos: data.moradores.idades.adultos,
              idosos: data.moradores.idades.idosos
          },
          generos: {
              masc: data.moradores.generos.masc,
              fem: data.moradores.generos.fem,
              nIdent: data.moradores.generos.nIdent
          },
          total: data.moradores.total
      }
    });
  }

}
