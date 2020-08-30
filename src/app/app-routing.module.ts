import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CrudUsuariosComponent} from './components/usuarios/crud-usuarios/crud-usuarios.component';
import {CriarUsuarioComponent} from './components/usuarios/criar-usuario/criar-usuario.component';

import {CrudCartoesComponent} from './components/cartoes/crud-cartoes/crud-cartoes.component';
import {CriarCartoesComponent} from './components/cartoes/criar-cartoes/criar-cartoes.component';


const routes: Routes = [
  {
    path: "usuarios",
    component: CrudUsuariosComponent
  },
  {
    path: "usuarios/create/:id",
    component: CriarUsuarioComponent
  },
  {
    path: "usuarios/create",
    component: CriarUsuarioComponent
  },
  {
    path: "cartoes",
    component: CrudCartoesComponent
  },
  {
    path: "cartoes/create",
    component: CriarCartoesComponent
  },
  {
    path: "cartoes/create/:id",
    component: CriarCartoesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
