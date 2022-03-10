import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService implements OnInit {
  private ingredients: Ingredient[] = [
    new Ingredient('TestItem', 5),
    new Ingredient('Apples', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() {}

  ngOnInit() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  updateIngredients(name: string, amount: number) {
    let newIngredient = new Ingredient(name, amount);
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addRecipeIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
