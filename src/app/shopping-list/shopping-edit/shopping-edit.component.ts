import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) ingredientName:
    | ElementRef
    | undefined;
  @ViewChild('amountInput', { static: true }) ingredientAmount:
    | ElementRef
    | undefined;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddIngredient() {
    if (
      this.ingredientName?.nativeElement.value &&
      this.ingredientName.nativeElement.value !== ''
    ) {
      this.shoppingListService.updateIngredients(
        this.ingredientName.nativeElement.value,
        this.ingredientAmount?.nativeElement.value
      );
      console.log(this.shoppingListService.getIngredients());
    }
  }
}
