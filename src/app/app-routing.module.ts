import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ContactComponent } from './page/contact/contact.component';

const routes: Routes = [
  { path: 'rueda/login', component: LoginComponent },
  { path: 'rueda/contact', component: ContactComponent },
  // Ruta por defecto (redirigir al login)
  { path: '', redirectTo: 'rueda/login', pathMatch: 'full' },
  // Ruta comodín para errores 404
  { path: 'rueda/**', redirectTo: 'rueda/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
