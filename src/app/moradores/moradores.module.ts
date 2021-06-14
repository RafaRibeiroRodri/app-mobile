import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MoradoresPage} from './moradores.page'
import { HttpClientModule } from '@angular/common/http';
import { MoradoresPageRoutingModule } from './moradores-routing.module';
import {Camera} from '@ionic-native/camera/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoradoresPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MoradoresPage],
  providers: [Camera]
})
export class MoradoresModule {
}
