import {Component, OnInit} from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService : RecipeService) {

  }

  ngOnInit() {
    this.recipeService.fetchData();
  }

  onStore(){
    this.recipeService.storeData().subscribe(
      data => console.log(data.json()),
      err => console.log(err.json())
    );
  }

  onFetch(){
    this.recipeService.fetchData();
  }
}
