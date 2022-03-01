import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('TestItem', 5),
    new Ingredient('Apples', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients(){
      return this.ingredients.slice();
  }

  updateIngredients(name : string, amount : number){
      let newIngredient = new Ingredient(name,amount);
      this.ingredients.push(newIngredient);
      this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
