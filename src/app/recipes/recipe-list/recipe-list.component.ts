import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Lasagne', "This is Yummy", "https://www.rhodesquality.com/app/uploads/2017/08/lasagne-800x800-c-default.jpg"),
    new Recipe('Lasagne Helper', "This is Yummier!", "https://www.rhodesquality.com/app/uploads/2017/08/lasagne-800x800-c-default.jpg")
  ];
  constructor() { }
  

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
