import { Component, OnInit , Output ,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = []
  @Output() recipeSelected = new EventEmitter<Recipe>()
  recipe = new Recipe('Dummy','Dummy','http://img.tarad.com/shop/a/animagbooks/img-lib/spd_2015032452759_b.jpg')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe : Recipe) {
  	this.recipeSelected.emit(recipe)
  } 
}
