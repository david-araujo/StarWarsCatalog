import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { Character } from './character/character.model';
import { SWAPI } from 'src/app/sw.api';

@Injectable()
export class CharactersService {

    constructor(private http: HttpClient) {}

    characters(complement?: string){
      complement = complement ? complement : `${SWAPI}/people`;
      return this.http.get(complement);
    }

}
