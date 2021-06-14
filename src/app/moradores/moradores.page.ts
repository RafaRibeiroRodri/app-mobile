import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Camera} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.page.html',
  styleUrls: ['./moradores.page.scss'],
})
export class MoradoresPage {

  private endPoint;
  dados: {
    quantidade;
    masc;
    fem;
    nIdent;
    jovens;
    adultos;
    idosos;
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
    this.http.get(this.endPoint + `/morador/dados/`).subscribe((data: any) => {
      const moradoes = data;
      this.dados = {
        quantidade: moradoes.quantidade,
        masc: moradoes.masc,
        fem: moradoes.fem,
        nIdent: moradoes.nIdent,
        jovens: moradoes.jovens,
        adultos: moradoes.adultos,
        idosos: moradoes.idosos,
      };
    });
  }

}
