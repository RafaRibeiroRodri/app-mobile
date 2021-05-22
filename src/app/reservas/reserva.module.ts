import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import { ReservaPageRoutingModule } from './reserva-routing.module';
import { ReservaPage } from './reserva.page'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ReservaPage]
})
export class ReservaModule {
}
