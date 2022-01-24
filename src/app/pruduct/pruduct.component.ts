import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-pruduct',
  templateUrl: './pruduct.component.html',
  styleUrls: ['./pruduct.component.css']
})
export class PruductComponent implements OnInit {
  age : number = 23;
  prenom : string = "lallahem";
  adresse : any = {street:"rue el jawhra",ville:"ariana"};
  Email(){
    return this.prenom+'@gmail.com';
  }
  constructor() {console.log('bonjour');}

  ngOnInit(): void {
    console.log('bonjour');
  }

}
