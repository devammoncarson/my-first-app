import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }
}