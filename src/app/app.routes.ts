import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { AdminisComponent } from '../component/adminis/adminis.component';
import { AgregarComponent } from '../component/agregar/agregar.component';
import { EditarComponent } from '../component/editar/editar.component';
import { EliminarComponent } from '../component/eliminar/eliminar.component';
import { VisualizarComponent } from '../component/visualizar/visualizar.component';
import { UserComponent } from '../component/user/user.component';
import { UseragregarComponent } from '../component/useragregar/useragregar.component';
import { VerresetaComponent } from '../component/verreseta/verreseta.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'adminis', component: AdminisComponent, 
    children: [
      { path: 'agregar', component: AgregarComponent },
      {path:'editar',component:EditarComponent},
      { path: 'eliminar', component:EliminarComponent },
      {path:'visualizar',component:VisualizarComponent}
    ]
  },
  {path:'user',component:UserComponent,
    children:[
        {path:'useragregar',component:UseragregarComponent},
        {path:'verreseta',component:VerresetaComponent}
    ]
  }
];
