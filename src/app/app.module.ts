import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {routing} from "./app.routing";
import {RecipeService} from "./recipes/recipe.service";
import {CoreModule} from "./core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
