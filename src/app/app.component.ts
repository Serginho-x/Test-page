import { Component } from '@angular/core';
import { AddConstrComponent } from './add-constr/add-constr.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent { 
	text: Text[]=[];

	texts = [ ];

	show() {
	localStorage.setItem('name', JSON.stringify({name:+this.text}));
	this.texts.push(JSON.parse(localStorage.getItem('name')))
	}

}


