import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { restuarantReducer } from './Reducers/restuarant.reducer'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestuarantComponent } from './MyComponents/add-restuarant/add-restuarant.component';
import { RestuarantsComponent } from './MyComponents/restuarants/restuarants.component';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { LoginComponent } from './MyComponents/login/login.component';


// pagination 
import { NgxPaginationModule } from 'ngx-pagination';
import { LogoutComponent } from './MyComponents/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    AddRestuarantComponent,
    RestuarantsComponent,
    AdminComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({restuarant : restuarantReducer}), 
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
