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
    quantidade
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
      const usuarios = data.moradores
      this.moradores = {
          idades: {
              jovens: usuarios?.idades?.jovens || '',
              adultos: usuarios?.idades?.adultos || '',
              idosos: usuarios?.idades?.idosos || ''
          },
          generos: {
              masc: usuarios?.generos?.masc || '',
              fem: usuarios?.generos?.fem || '',
              nIdent: usuarios?.generos?.nIdent || ''
          },
          quantidade: usuarios?.quantidade || ''
      }

      console.log("moradores", this.moradores);
    });
  }

}
