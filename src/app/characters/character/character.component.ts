import { Component, OnInit, Input } from '@angular/core';
import { Character } from './character.model';

@Component({
  selector: 'stw-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  constructor() { }

  ngOnInit() {
  }

}
