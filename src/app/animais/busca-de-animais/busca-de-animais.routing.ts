import { Routes, RouterModule } from '@angular/router';
import { BuscaDeAnimaisComponent } from './busca-de-animais.component';

const routes: Routes = [
  {
    path:'', component: BuscaDeAnimaisComponent
  },
];

export const BuscaDeAnimaisRoutes = RouterModule.forChild(routes);
