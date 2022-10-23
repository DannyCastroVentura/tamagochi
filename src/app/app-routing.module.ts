import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { IdeiasComponent } from './ideias/ideias.component';
import { LoginComponent } from './login/login.component';
import { MissoesComponent } from './missoes/missoes.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "shop", component: ShopComponent },
  { path: "ideias", component: IdeiasComponent },
  { path: "missoes", component: MissoesComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
