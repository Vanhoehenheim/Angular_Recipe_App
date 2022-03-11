import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers : []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private shoppingListSub : Subscription = Subscription.EMPTY //storing the subscription so you can unsubscribe it in ngOnDestory
  constructor(private shoppingListService : ShoppingListService, private recipeService : RecipeService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListSub = this.shoppingListService.ingredientsChanged.subscribe((updatedIngredient)=>{
      this.ingredients = updatedIngredient;
    }) //when the shopping list changes, ie, new ingredients added, uodate the current shopping list by subscirbing to the shoppingList in the ShoppingListService
  } 

  ngOnDestroy(): void {
      this.shoppingListSub.unsubscribe()
  }


}
