import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Restuarant } from '../../Models/restuarant.model';
import { AppState } from '../../app.state';
import * as RestuarantActions from './../../Actions/restuarant.actions'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title!: string; 
  restuarants$ : Observable<Restuarant[]>


  constructor(private store: Store<AppState>) {
    this.restuarants$ = store.select('restuarant')
   }

   removeRestuarant (index){
    this.store.dispatch( new RestuarantActions.RemoveRestuarant(index))
    console.log(index)
  }

  
  

  ngOnInit() {}

}
