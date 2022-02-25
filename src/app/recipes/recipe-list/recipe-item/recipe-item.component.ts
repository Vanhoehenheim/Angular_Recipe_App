import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeItemClicked = new EventEmitter<void>();

  @Input() singleRecipe: Recipe = { name: '', description: '', imagePath: '' };

  onRecipeItemClicked() {
    this.recipeItemClicked.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
