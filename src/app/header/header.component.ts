import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PokemonService } from '../shared/services/pokemon.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';


@Component(
{
    selector: 'poke-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit
{
    @ViewChild('filterInput') filterInput: NgModel;
    public pokemonName: string;


    constructor(private pokemonService: PokemonService, private router: Router) { }

    ngOnInit(): void { }

    ngAfterViewInit(): void
    {
        this.filterInput.valueChanges.pipe(debounceTime(2000), distinctUntilChanged()).subscribe(_pokemonName =>
        {   
            if(_pokemonName)
            {
                this.pokemonService.getPokemonByName(_pokemonName).subscribe((result: Pokemon) =>
                {
                    this.pokemonService.searchPokemon(result);
                    this.filterInput.control.reset();
                },
                error =>
                {
                    this.router.navigate(['/pokemon']);
                    throw Error(`Pokemon não encontrado!\n${error}`);
                });
            }
        })
    }

    public handleSearch() 
    {
        //this.pokemonService.getPokemonByName(this.searchPokemon).pipe(debounce(() => interval(5000))).subscribe((x: Pokemon) => console.log(x));
    }
}