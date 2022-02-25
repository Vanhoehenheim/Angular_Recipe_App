import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('TestItem', 5),
    new Ingredient('Apples', 10),
  ];
  constructor() {}

  ngOnInit(): void {}

  addToShoppingList(ingredientRecieved: Ingredient) {
    let newIngredient = new Ingredient(
      ingredientRecieved.name,
      ingredientRecieved.amount
    );
    this.ingredients.push(newIngredient);
  }
}
