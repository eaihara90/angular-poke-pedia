import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EvolutionChain } from 'src/app/interfaces/evolution-chain.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { Species } from 'src/app/interfaces/species.interface';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
    selector: 'poke-info-evolution',
    templateUrl: './info-evolution.component.html',
    styleUrls: ['./info-evolution.component.scss']
})
export class InfoEvolutionComponent implements OnInit, OnDestroy
{
    @Input() pokemon: Pokemon;
    private subscription = new Subscription();
    private evolutionChain: EvolutionChain;
    public evolutions: Pokemon[] = [];

    constructor(private pokemonService: PokemonService) { }

    ngOnInit(): void
    {
        this.subscription.add(this.pokemonService.getPokemonSpecies(this.pokemon.name).subscribe((_pokemon: Species) =>
        {
            this.pokemonService.getPokemonEvolutionChain(_pokemon.evolution_chain.url).subscribe((_evolutionChain: EvolutionChain) =>
            {
                this.evolutionChain = _evolutionChain;

                this.loadEvolutionData();
            });
        }));
    }

    ngOnDestroy(): void
    {
        this.subscription.unsubscribe();
    }

    private loadEvolutionData(): void
    {
        const hasEvolution = this.evolutionChain.chain.evolves_to.length;
           
        if(!hasEvolution)
        {
            return;
        }

        const evolutionName = this.evolutionChain.chain.evolves_to[0].species.name;
            
        this.pokemonService.getPokemonByName(evolutionName).subscribe((_pokemon: Pokemon) =>
        {
            this.evolutions.push(_pokemon);

            console.log('[Evolução 1]', this.evolutionChain)
            console.log('[Lista de Pokemon 1]', this.evolutions)
        });

        const hasNextEvolution = this.evolutionChain.chain.evolves_to[0].evolves_to.length;
        
        if(!hasNextEvolution)
        {
            return;
        }
        
        const nextEvolutionName = this.evolutionChain.chain.evolves_to[0].evolves_to[0].species.name;
            
        this.pokemonService.getPokemonByName(nextEvolutionName).subscribe((_pokemon: Pokemon) =>
        {
            this.evolutions.push(_pokemon);

            console.log('[Evolução 2]', this.evolutionChain)
            console.log('[Lista de Pokemon 2]', this.evolutions)
        });
    }
}
