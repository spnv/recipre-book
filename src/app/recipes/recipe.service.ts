import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes : Recipe[] = [
    new Recipe(
      'Harry Potter and The Philosopher’s Stone',
      'begins with Harry Potter, a shy and self-doubting boy wizard ',
      'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr11/grid-cell-16797-1406738149-9.jpg',[
        new Ingredient('Book',1)
      ]),
    new Recipe(
      'Harry Potter and the Chamber of Secrets',
      'a sequel to Harry second year at school. Ron younger sister Ginny finds a book belonging to Lord Voldemort school days',
      'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr02/grid-cell-3222-1406738404-13.jpg',[
        new Ingredient('Book',1)
      ]),
    new Recipe(
      'Harry Potter and the Prisoner of Azkaban',
      'Harry comes to know about Remus Lupin and Sirius Black',
      'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr04/grid-cell-25080-1406738648-5.jpg',[
        new Ingredient('Book',1)
      ]),
    new Recipe(
      'Harry Potter and the Goblet of Fire',
      'a dangerous Triwizard Tournament to bring Harry to Voldemort succeeds',
      'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr08/grid-cell-32455-1406738775-16.jpg',[
        new Ingredient('Book',1)
      ]),
    new Recipe(
      'Harry Potter and the Order of the Phoenix',
      'which was reactivated due to the arrival of Voldemort to protect Harry and to defeat Voldemort supporters',
      'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr02/grid-cell-20736-1406738877-9.jpg',[
        new Ingredient('Book',1)
      ]),
    new Recipe(
      'Harry Potter and the Half-Blood Prince',
      'Triwizard Tournament to bring Harry to Voldemort succeeds',
      'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr02/grid-cell-21422-1406739283-9.jpg',[
        new Ingredient('Book',1)
      ]),
    new Recipe(
      'Harry Potter and the Deathly Hallows',
      'Voldemort has completed his ascension to power and gains control of the Ministry of Magic',
      'https://img.buzzfeed.com/buzzfeed-static/static/2014-07/30/12/enhanced/webdr11/grid-cell-17315-1406739353-13.jpg',[
        new Ingredient('Book',1)
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
