import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaComponent } from './components/ruta/ruta.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'rutas', component: RutasComponent },
  {path: 'ruta/:id', component: RutaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'quienes-somos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
