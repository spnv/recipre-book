import {Injectable, EventEmitter, OnInit} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] =[];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Harry Potter and The Philosopher’s Stone',
  //     'begins with Harry Potter, a shy and self',
  //     'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr11/grid-cell-16797-1406738149-9.jpg', [
  //       new Ingredient('Book', 1)
  //     ]),
  //   new Recipe(
  //     'Harry Potter and the Chamber of Secrets',
  //     'a sequel to Harry second year at school. ',
  //     'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr02/grid-cell-3222-1406738404-13.jpg', [
  //       new Ingredient('Book', 1)
  //     ]),
  //   new Recipe(
  //     'Harry Potter and the Prisoner of Azkaban',
  //     'Harry comes to know about Remus Lupin and',
  //     'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr04/grid-cell-25080-1406738648-5.jpg', [
  //       new Ingredient('Book', 1)
  //     ]),
  //   new Recipe(
  //     'Harry Potter and the Goblet of Fire',
  //     'a dangerous Triwizard Tournament to bring',
  //     'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr08/grid-cell-32455-1406738775-16.jpg', [
  //       new Ingredient('Book', 1)
  //     ]),
  //   new Recipe(
  //     'Harry Potter and the Order of the Phoenix',
  //     'which was reactivated due to the arrival',
  //     'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr02/grid-cell-20736-1406738877-9.jpg', [
  //       new Ingredient('Book', 1)
  //     ]),
  //   new Recipe(
  //     'Harry Potter and the Half-Blood Prince',
  //     'Triwizard Tournament to bring Harry to',
  //     'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr02/grid-cell-21422-1406739283-9.jpg', [
  //       new Ingredient('Book', 1)
  //     ]),
  //   new Recipe(
  //     'Harry Potter and the Deathly Hallows',
  //     'Voldemort has completed his ascension ',
  //     'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr11/grid-cell-17315-1406739353-13.jpg', [
  //       new Ingredient('Book', 1)
  //     ])
  // ];

  constructor(private http: Http) {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipe-book-8b0ee.firebaseio.com/recipes.json',
      body,
      {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipe-book-8b0ee.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}
