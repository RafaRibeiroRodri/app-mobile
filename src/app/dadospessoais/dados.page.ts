import {Component} from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage {

  dados = {
    nome: "Test",
    cpf: "123.123.123-12",
    rg: "12.123.123-1",
    dataNas: "01/03/1999",
    unidade: "15",
    bloco: "A",
    telFixo: "(12) 3207-1098",
    telCel: "(12) 9999-9999" 
  };

  constructor() {

  }

}
