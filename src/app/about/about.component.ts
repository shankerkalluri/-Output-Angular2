import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'app-about',
    templateUrl: './about.component.html'
})

export class AboutComponent{

   //@Input() message: string;
   
   message: string = "I am a child Component";
   
   @Output() messageEvent = new EventEmitter<string>();
   
   constructor(){}
   
   sendMessage(){
        this.messageEvent.emit(this.message);
   }

    
   getBackgroundColor(){
        return 'yellow';
   }
   
    showStyle: false;
  
        getStyle() {
        if(this.showStyle) {
          return "pink";
        } else {
          return "";
        }
      }
   
}