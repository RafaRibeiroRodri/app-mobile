import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DadosPage} from './dados.page'
import { HttpClientModule } from '@angular/common/http';
import { DadosPageRoutingModule } from './dados-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DadosPage]
})
export class DadosPessoaisModule {
}
