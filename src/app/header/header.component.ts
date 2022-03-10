import { Component} from "@angular/core";

@Component({
    templateUrl : "header.component.html",
    selector : 'app-header'
})
export class HeaderComponent {

    // @Output() navLinkClicked = new EventEmitter<string>();

    // recipeClicked(){
    //     this.navLinkClicked.emit('Recipe');
    // }
    // shoppingListClicked(){
    //     this.navLinkClicked.emit('ShoppingList');
    // }
    //?Since you added routing, you no longer need to use ngIf to selctively display components. So no need for click events and emitting if link was clicked 

}