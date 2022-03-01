import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  displayRecipe : Recipe = {name : "", description : "", imagePath : ""}

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((selectedRecipe)=>{
      this.displayRecipe = selectedRecipe;
    })
  }

}
