import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaDeAnimaisComponent } from './busca-de-animais.component';
import { BuscaDeAnimaisRoutes } from './busca-de-animais.routing';

@NgModule({
  imports: [
    CommonModule,
    BuscaDeAnimaisRoutes
  ],
  declarations: [BuscaDeAnimaisComponent]
})
export class BuscaDeAnimaisModule { }
