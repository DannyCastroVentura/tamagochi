import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShopComponent } from './shop/shop.component';
import {MatListModule} from '@angular/material/list';
import { IdeiasComponent } from './ideias/ideias.component';
import { LoginComponent } from './login/login.component';
import { MissoesComponent } from './missoes/missoes.component';

const material = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatSidenavModule,
  FormsModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    IdeiasComponent,
    LoginComponent,
    MissoesComponent,
  ],
  imports: material,
  exports: material,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
