import { Component,OnInit,ViewChildren,QueryList } from "@angular/core";
import { Router,ActivatedRoute,Params } from "@angular/router";
declare var require;
declare var $;
let path = require("./main.html");
@Component({
	selector: "ng-main",
	template: path
})

export class MainComponent implements OnInit {

    

	constructor(
        
	) {}

    ngOnInit() {
        
    }

    
}
