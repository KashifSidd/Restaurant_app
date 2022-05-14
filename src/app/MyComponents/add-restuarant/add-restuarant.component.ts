import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as RestuarantActions from './../../Actions/restuarant.actions'

@Component({
  selector: 'app-add-restuarant',
  templateUrl: './add-restuarant.component.html',
  styleUrls: ['./add-restuarant.component.scss']
})
export class AddRestuarantComponent implements OnInit {

  title!: string;


  constructor(private store: Store<AppState>) { }

  addRestuarant(name, category,type, imageUrl, location, price, rating, createdOn) {
    this.store.dispatch(new RestuarantActions.AddRestuarants({ name: name, category: category, type :type, imgUrl: imageUrl, location: location, price: price, rating: rating, createdOn: createdOn, id: Date.now()}))
  }

  ngOnInit(): void {
    this.title = "Add Restuarant";
  }
}
