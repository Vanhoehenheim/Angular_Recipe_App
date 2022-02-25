import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    templateUrl : "header.component.html",
    selector : 'app-header'
})
export class HeaderComponent {

    @Output() navLinkClicked = new EventEmitter<string>();

    recipeClicked(){
        this.navLinkClicked.emit('Recipe');
    }
    shoppingListClicked(){
        this.navLinkClicked.emit('ShoppingList');
    }

}