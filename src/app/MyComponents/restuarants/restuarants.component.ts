import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store} from '@ngrx/store';
import * as RestuarantActions from './../../Actions/restuarant.actions'
import { Restuarant } from '../../Models/restuarant.model'
import { AppState } from 'src/app/app.state';


@Component({
  selector: 'app-restuarants',
  templateUrl: './restuarants.component.html',
  styleUrls: ['./restuarants.component.scss']
})
export class RestuarantsComponent implements OnInit {
  title!: string; 
  restuarants$ : Observable<Restuarant[]> 
  searchControl : String 
  restuarants

  constructor(private store : Store<AppState>){this.restuarants$ = store.select('restuarant')}
  
  p: number = 1;

    ngOnInit() {
    this.title = "Restuarants";  
    window.location.reload;
    }
    

  getOnlyVeg(){
    this.store.dispatch(new RestuarantActions.VegRestuarant)
  }

  getNonVeg(){
    this.store.dispatch(new RestuarantActions.NonVegRestuarant)
  }

searchRestuarant(value: string){
  this.store.dispatch(new RestuarantActions.SearchRestuarant(""))
}
clear(){
  window.location.reload();

}

}