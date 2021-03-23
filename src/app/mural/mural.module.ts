import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MuralPage} from './mural.page'
import { MuralPageRoutingModule } from './mural-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuralPageRoutingModule
  ],
  declarations: [MuralPage]
})
export class MuralModule {
}
