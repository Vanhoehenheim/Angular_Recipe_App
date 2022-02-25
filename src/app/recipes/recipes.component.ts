import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeToBeSentToDetails : Recipe = { name: '', description: '', imagePath: ''};

  constructor() { }

  ngOnInit(): void {
  }

  recievedRecipeToBeDisplayed(recipe : Recipe){
    this.recipeToBeSentToDetails.name = recipe.name;
    this.recipeToBeSentToDetails.description = recipe.description;
    this.recipeToBeSentToDetails.imagePath = recipe.imagePath;
  }

}
