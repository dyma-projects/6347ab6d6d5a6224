import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  public result: number = 0;

  constructor() {}

  ngOnInit() { }
  
  addResultToParent(number: number) {
   return this.result++
  }

  removeResultToParent(number: number) {
    return this.result--
   }

}
