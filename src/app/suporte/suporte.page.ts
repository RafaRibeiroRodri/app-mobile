import { Location } from '@angular/common';
import {Component} from '@angular/core';

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
  sugestao;

  constructor(private location: Location) {

  }

  back() { this.location.back() }

}
