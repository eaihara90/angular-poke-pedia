import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SimpleList } from '../../interfaces/simple-list.interface';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { EvolutionChain } from 'src/app/interfaces/evolution-chain.interface';
import { Species } from '../../interfaces/species.interface';

@Injectable(
{
    providedIn: 'root'
})
export class PokemonService
{   
    public searchingPokemon = new Subject<Pokemon>();
    
    constructor(private http: HttpClient) { }

    public getPokemonByName(_name: string): Observable<Pokemon>
    {
        return this.http.get<Pokemon>(`${environment.name}${_name.toLowerCase()}`);
    }

    public getPokemonList(_offset: number, _limit: number): Observable<SimpleList>    
    {
        return this.http.get<SimpleList>(`${environment.name}`,
        {
            params: { 'offset': _offset.toString(), 'limit': _limit.toString() }
        });
    }

    public searchPokemon(_pokemon: Pokemon)
    {
        this.searchingPokemon.next(_pokemon);
    }

    public getPokemonSpecies(_name: string): Observable<Species>
    {
        return this.http.get<Species>(`${environment.species}${_name}`);
    }

    public getPokemonEvolutionChain(_evolutionChaingUrl: string): Observable<EvolutionChain>
    {
        return this.http.get<EvolutionChain>(`${_evolutionChaingUrl}`);
    }
}