import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EvolutionChain } from 'src/app/interfaces/evolution-chain.interface';
import { Evolution } from 'src/app/interfaces/evolution.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { Species } from 'src/app/interfaces/species.interface';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component(
{
    selector: 'poke-info-evolution',
    templateUrl: './info-evolution.component.html',
    styleUrls: ['./info-evolution.component.scss']
})
export class InfoEvolutionComponent implements OnInit, OnDestroy
{
    @Input() pokemon: Pokemon;
    private subscription = new Subscription();
    public evolutionChain: EvolutionChain;
    public evolutions: Evolution[] = [];

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
        const baseName = this.evolutionChain.chain.species.name;
        
        this.pokemonService.getPokemonByName(baseName).subscribe((_pokemon: Pokemon) =>
        {
            const id = _pokemon.id;

            const sprite = _pokemon.sprites.other.dream_world.front_default;

            const minLevel = null;

            const isBaby = this.evolutionChain.chain.is_baby;

            const item = this.evolutionChain.chain.evolves_to[0].evolution_details[0].item;

            const happiness = this.evolutionChain.chain.evolves_to[0].evolution_details[0].min_happiness;

            const baseEvolution = this.createEvolution(id, baseName, sprite, minLevel, isBaby, item, happiness);

            this.evolutions.push(baseEvolution);
        });
        
        const hasEvolution = this.evolutionChain.chain.evolves_to.length;
           
        if(!hasEvolution)
        {
            return;
        }

        const evolutionName = this.evolutionChain.chain.evolves_to[0].species.name;
            
        this.pokemonService.getPokemonByName(evolutionName).subscribe((_pokemon: Pokemon) =>
        {
            const id = _pokemon.id;
            
            const sprite = _pokemon.sprites.other.dream_world.front_default;

            const minLevel = this.evolutionChain.chain.evolves_to[0].evolution_details[0].min_level;

            const isBaby = this.evolutionChain.chain.is_baby;

            const item = this.evolutionChain.chain.evolves_to[0].evolution_details[0].item;

            const firstEvolution = this.createEvolution(id, evolutionName, sprite, minLevel, isBaby, item);

            this.evolutions.push(firstEvolution);

            this.sortEvolutions();
        });

        const hasNextEvolution = this.evolutionChain.chain.evolves_to[0].evolves_to.length;
        
        if(!hasNextEvolution)
        {
            return;
        }
        
        const nextEvolutionName = this.evolutionChain.chain.evolves_to[0].evolves_to[0].species.name;
            
        this.pokemonService.getPokemonByName(nextEvolutionName).subscribe((_pokemon: Pokemon) =>
        {
            const id = _pokemon.id;

            const sprite = _pokemon.sprites.other.dream_world.front_default;
            
            const minLevel = this.evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level;

            const isBaby = this.evolutionChain.chain.is_baby;

            const item = this.evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].item;

            const secondEvolution = this.createEvolution(id, nextEvolutionName, sprite, minLevel, isBaby, item);

            this.evolutions.push(secondEvolution);

            this.sortEvolutions();
        });
    }

    private createEvolution(_id: number, _name: string, _spriteUrl: string, _min_level: number, _isBaby: boolean, _item?: any, _min_happiness?: any): Evolution
    {
        const newEvolution: Evolution = { id: _id, name: _name, sprite: _spriteUrl, min_level: _min_level, is_baby: _isBaby, item:_item, min_happines: _min_happiness };

        return newEvolution;
    }

    private sortEvolutions(): void
    {
        this.evolutions.sort((p1, p2) => p1.id - p2.id);
    
        

        if(this.evolutions[0].is_baby)
        {
            const babyPokemonList = this.evolutions.splice(this.evolutions.length - 1, 1);

            const babyPokemon = babyPokemonList[0];

            this.evolutions.unshift(babyPokemon);
        }

        console.log(this.evolutions);
        

        // this.evolutions.forEach(_pokemon =>
        // {
        //     if (_pokemon.is_baby)
        //     {
                
        //     }
        // })
    }
}
