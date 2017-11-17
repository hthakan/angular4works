import { Component, OnInit } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  post = {
    title: "Tile",
    isFavorite: true

  }

 

  // onFavoriteChange(eventArgs: {newValue: boolean}){
  //   console.log("favorite changed" , eventArgs);
  // }


  onFavoriteChange(eventArgs: FavoriteChangeEventArgs) {
    console.log("favorite changed", eventArgs);
  }



}
