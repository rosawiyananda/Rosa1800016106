import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Praktikum3Component } from './pages/praktikum3/praktikum3.component';
import { MahasiswaComponent } from './pages/mahasiswa/mahasiswa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Praktikum3Component,
    MahasiswaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
