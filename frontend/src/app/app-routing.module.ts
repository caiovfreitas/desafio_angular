import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importando Componentes para as rotas
import { HomeComponent } from './views/home/home.component'
import { ClientsComponent } from './views/clients/clients.component'
import { ClientCreateComponent } from './components/client/client-create/client-create.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "clients",
  component: ClientsComponent
}, {
  path: "clients/create",
  component: ClientCreateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
