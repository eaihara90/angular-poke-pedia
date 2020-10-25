import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component(
{
    selector: 'poke-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit
{
    public subscription = new Subscription();

    @Input() pokemon: Pokemon;

    constructor(private pokemonService: PokemonService) { }

    ngOnInit(): void 
    {
        this.pokemonService.getPokemonColor(this.pokemon.name).subscribe(x =>
        {
            //console.log(x.color.name);
        });

    }

}
