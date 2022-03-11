import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  displayRecipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };
  recipeID : number = 0;

  constructor(private recipeService: RecipeService, private route : ActivatedRoute, private shoppingListService : ShoppingListService) {}

  ngOnInit(): void {
    //Initial Approach subscribnig to an event when a recipe in the recipe list is clicked
    // this.recipeService.recipeSelected.subscribe((recipe : Recipe)=>{
    //   this.displayRecipe = recipe
    // })

    //New Approach using routing. Passing an index from the route. Fetching the index element from the recipeService
    this.route.params.subscribe((params)=>{
      this.recipeID = +params['id']
      this.displayRecipe = this.recipeService.getRecipe(this.recipeID);
    })
    
  }

  //on click, send the selected ingredients to the shopping list service where it adds to the ingredients array
  sendToShopping(ingredientsToBeSentToShoppingList: Ingredient[]) { 
    // this.recipeService.sendToShoppingList(ingredientsToBeSentToShoppingList);
    this.shoppingListService.addRecipeIngredients(ingredientsToBeSentToShoppingList);
  } 
}
