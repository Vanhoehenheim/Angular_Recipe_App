import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() emitIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', { static: true }) ingredientName: ElementRef | undefined;
  @ViewChild('amountInput', { static: true }) ingredientAmount: ElementRef | undefined;
  constructor() {}

  ngOnInit(): void {}
 
  onAddIngredient() {
    console.log(this.ingredientName?.nativeElement.value)
    this.emitIngredient.emit({
      name: this.ingredientName?.nativeElement.value,
      amount: this.ingredientAmount?.nativeElement.value,
    });
  }
}
