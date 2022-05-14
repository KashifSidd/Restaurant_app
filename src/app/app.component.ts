import { Component } from '@angular/core';

import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Super Eats';
  isUserLoggedIn = false;

  constructor(private authService: AuthService){}
  
  
  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);

    if( storeData != null && storeData == "true")
      this.isUserLoggedIn = true;
    else


    
       this.isUserLoggedIn = false;
 }
 refresh(){
   window.location.reload();
 }
}

