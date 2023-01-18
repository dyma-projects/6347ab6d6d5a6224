import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() resultForChild: number;
  @Output() addResultToParent = new EventEmitter<number>();
  @Output() removeResultToParent = new EventEmitter<number>();


  constructor() { }
  ngOnInit() {
  }

  addResult() {
    this.addResultToParent.emit(this.resultForChild);
  }

  removeResult() {
    this.removeResultToParent.emit(this.resultForChild)
  }
}
