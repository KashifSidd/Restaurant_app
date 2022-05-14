import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestuarantsComponent } from './MyComponents/restuarants/restuarants.component'
import { AdminComponent } from './MyComponents/admin/admin.component'
import { LoginComponent } from './MyComponents/login/login.component';
import { LogoutComponent } from './MyComponents/logout/logout.component';

import { RestuarantGuard } from './Guards/restuarant.guard';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent },
   { path: 'home', component: RestuarantsComponent, canActivate: [RestuarantGuard]},
   { path: 'admin', component: AdminComponent, canActivate: [RestuarantGuard]},
   { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
