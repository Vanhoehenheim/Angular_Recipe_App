import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>(); 
  private recipes: Recipe[] = [
    new Recipe(
      'French Toast',
      'French toast is a dish made of sliced bread soaked in beaten eggs and typically milk, then pan fried.',
      'https://images.unsplash.com/photo-1592222720114-38bcd5fc2c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      [
        { name: 'Eggs', amount: 10 },
        { name: 'Bread', amount: 6 },
      ]
    ),
    new Recipe(
      'Protein Shake',
      'Healthy Tasty Protein shake with 23g protein.',
      'https://images.unsplash.com/photo-1622818425825-1dcdb3a39c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      [
        { name: 'Protien', amount: 1 },
        { name: 'Milk', amount: 10 },
      ]
    ),
  ];
  constructor(private shoppingListService : ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(recipeIndex : number){
    return this.recipes[recipeIndex];
  }

  sendToShoppingList(ingredients : Ingredient[]){
    this.shoppingListService.addRecipeIngredients(ingredients)
  }
}
