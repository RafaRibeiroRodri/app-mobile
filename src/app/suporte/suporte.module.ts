import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import { SuportePageRoutingModule } from './suporte-routing.module';
import {SuportePage} from './suporte.page'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuportePageRoutingModule,
    HttpClientModule
  ],
  declarations: [SuportePage]
})
export class SuporteModule {
}
