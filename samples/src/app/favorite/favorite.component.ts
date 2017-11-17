import { Component, OnInit, Input, Output,EventEmitter,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',  
  styles:[
    `
      .glyphicon{
        color:green;
    }

    .glyphicon-star{
      background:black;
    }
    `
  ],
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;
  // @Output() change = new EventEmitter();
  @Output('change') click = new EventEmitter();

  // isFavorite: boolean;
  
  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangeEventArgs{
  newValue:boolean;
}
