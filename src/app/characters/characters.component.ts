import { Component, OnInit } from '@angular/core';
import { Character } from './Character/character.model';
import { CharactersService } from 'src/app/characters/characters.service';

@Component({
  selector: 'stw-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.characters().subscribe(data => {
      console.log(data);
      data['results'].forEach(character => {
        this.charactersService.characters(character.homeworld).subscribe(homeWorld => {
          character.homeworld = homeWorld['name'];
          this.characters.push(character);
        });
      });
    });
  }
}
