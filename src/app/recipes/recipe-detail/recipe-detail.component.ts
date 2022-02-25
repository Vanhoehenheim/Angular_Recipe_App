import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() displayRecipe : Recipe = {name : "Recipe Name", description : "Description Of Recipe", imagePath : ""}
  constructor() { }

  ngOnInit(): void {
  }

}
