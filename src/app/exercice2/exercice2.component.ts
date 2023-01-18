import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component{

  @ViewChild('myInputText', {static : true}) inputValue: ElementRef<HTMLInputElement>
  public valeur: string = ""

  constructor() {}

  getValue() {
    this.valeur = this.inputValue.nativeElement.value;
  }
}
