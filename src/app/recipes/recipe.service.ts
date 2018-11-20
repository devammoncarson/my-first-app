import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
        new Recipe(
            'Lasagne',
            "Just Like Mom Used To Make!",
            "https://www.rhodesquality.com/app/uploads/2017/08/lasagne-800x800-c-default.jpg",
            [
                new Ingredient('Stoffers Lasagne', 1),
                new Ingredient('French Bread', 1)
            ]),
        new Recipe(
            "World's Best Burger",
            "Becon, Cheese, Egg... Need I say more?",
            "https://simply-delicious-food.com/wp-content/uploads/2015/07/Bacon-and-cheese-burgers-3.jpg",
            [
                new Ingredient('Hamburger Patties', 6),
                new Ingredient('Sharp Cheddar Cheese Slices', 6),
                new Ingredient('Bacon Slices', 12),
                new Ingredient('Hamburger Buns', 6),
                new Ingredient('Eggs', 6),
                new Ingredient('Lettuce Heads', 6),
                new Ingredient('Ketchup', 1),
                new Ingredient('Mayo', 1)
            ])
      ];

      constructor(private slService: ShoppingListService) { }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}