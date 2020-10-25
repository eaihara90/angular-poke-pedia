import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { SimpleList } from '../interfaces/simple-list.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component(
{
    selector: 'poke-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy
{
    private subscription = new Subscription();
    private LIMIT: number = 9;
    private loadedTimes: number;
    public isLoading: boolean;
    public pokemonList: Pokemon[] = [];
    

    constructor(private pokemonService: PokemonService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void
    {
        this.isLoading = !this.isLoading;
        
        this.loadedTimes = 0;
        
        const offset = this.loadedTimes * 9;

        this.subscription.add(this.pokemonService.getPokemonList(offset, this.LIMIT).subscribe((_pokemonList: SimpleList) =>
        {
            this.loadList(_pokemonList);
            this.loadedTimes++;
            this.isLoading = !this.isLoading;
        }));

        this.subscription.add(this.pokemonService.searchingPokemon.subscribe((_pokemon: Pokemon) =>
        {
            if(_pokemon)
            {
                this.router.navigate(['/pokemon', _pokemon.name]);
            }
            else
            {
                this.router.navigate(['/pokemon']);
            }
        }));
    }

    ngOnDestroy(): void
    {
        this.subscription.unsubscribe();
    }

    private loadList(_pokemonBasicList: SimpleList)
    {
        for (const item of _pokemonBasicList.results)
        {
            this.subscription.add(this.pokemonService.getPokemonByName(item.name).subscribe((_pokemon: Pokemon) =>
            {
                this.pokemonList.push({..._pokemon});
                this.pokemonList.sort((p1, p2) => p1.id - p2.id);
            }));  
        }
    }

    public onLoadNextNine()
    {
        this.isLoading = !this.isLoading;

        const offset = this.loadedTimes * 9;        

        this.pokemonService.getPokemonList(offset, this.LIMIT).subscribe((_pokemonList: SimpleList) =>
        {
            this.loadList(_pokemonList);
            this.loadedTimes++;
            this.isLoading = !this.isLoading;
        })
    }
}
