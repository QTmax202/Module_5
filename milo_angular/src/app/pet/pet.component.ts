import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://i.pinimg.com/736x/5c/fd/f9/5cfdf9cbd229b00361f1662546054408.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
