import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';


/*
*/
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes /*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
