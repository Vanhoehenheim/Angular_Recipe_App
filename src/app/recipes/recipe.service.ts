import { EventEmitter, Output } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();  
    private recipes: Recipe[] = [
        new Recipe(
          'Test Recipe',
          'Test Des. This is a test',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
        ),
        new Recipe(
          'Test Recipe 2',
          'Test Des. This is a test 2',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
        ),
      ];
    getRecipes(){
        return this.recipes.slice();
    }
}