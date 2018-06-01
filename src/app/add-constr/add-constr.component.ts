import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-constr',
  templateUrl: './add-constr.component.html',
  styleUrls: ['./add-constr.component.css']
})
export class AddConstrComponent  {
	@Input() brr;
	submitted = false;
	return='';

	submitted1(){
	this.submitted=true;
	localStorage.setItem('name', JSON.stringify({name:+ this.brr.name}));
	this.return=(JSON.parse(localStorage.getItem('name')).name);
	}

	submitted2(){
	this.submitted=false;
	localStorage.setItem('name', JSON.stringify({name:+ this.return}));
	this.brr=(JSON.parse(localStorage.getItem('name')));
	}
	
}
