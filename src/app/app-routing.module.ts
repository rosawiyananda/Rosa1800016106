import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Praktikum3Component } from './pages/praktikum3/praktikum3.component';
import { MahasiswaComponent } from './pages/mahasiswa/mahasiswa.component';

const routes: Routes = [
{
	path:'home',
	component:HomeComponent
},
{
	path:'Praktikum3',
	component:Praktikum3Component
},
{
	path:'Mahasiswa',
	component:MahasiswaComponent
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
