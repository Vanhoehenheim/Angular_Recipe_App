import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen : boolean = false; //binds a property of the element it's called on to the variable
//   @HostListener('click') toggleDrop(event: Event) {
//     console.log(this.classlist.toggle('open'));
//   }

  //add an event listener to the element called on
  @HostListener('document:click',['$event']) toggleOpen(event : Event){
      // console.log(this.element)
      // console.log(event.target)
      this.isOpen = this.element.nativeElement.contains(event.target) ? !this.isOpen : false  
      // this.isOpen = !this.isOpen
  }  
  constructor(private element: ElementRef) {}
}
