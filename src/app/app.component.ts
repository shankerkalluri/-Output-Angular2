import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'app-container',
    templateUrl:`app.component.html`
    //template:`<h1>Hello World</h1>`
})

export class AppComponent implements OnInit{
    constructor(){}
    
    message = "I am a Parent";
    
    ngOnInit(){}
    
    receiveMessage($event){
        this.message = $event
    }
    
}

