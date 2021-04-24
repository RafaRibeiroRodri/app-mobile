import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Dados} from '../../api/model/dados';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage {

  private endPoint;

  dados: {
    morador_id;
    nome;
    cpf;
    rg;
    data_nasc;
    unidade;
    bloco;
    telefone;
  }

  constructor(private http: HttpClient) {
    this.http = http;
    this.endPoint = `${environment.backendUrl}`;
    this.get();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get() {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log("user", user);
    this.http.get(this.endPoint + `/morador/dados/${user.morador_id}`).subscribe((data: any) => {
      const usuario = data.morador[0];
      this.dados = { 
        morador_id: usuario.morador_id,
        nome: usuario.nome,
        cpf: usuario.cpf,
        rg: usuario.rg,
        data_nasc: usuario.data_nasc,
        unidade: usuario.unidade,
        bloco: usuario.bloco,
        telefone: usuario.telefone
      }
    })
  }

}
