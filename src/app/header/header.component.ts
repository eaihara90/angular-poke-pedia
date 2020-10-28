import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PokemonService } from '../shared/services/pokemon.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/components/notification/notification.service';
import { NotificationTypeEnum } from '../shared/components/notification/notification-type.enum';

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

    constructor(private pokemonService: PokemonService, private router: Router, private notificationService: NotificationService) { }

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
                    
                    this.notificationService.notify(
                    {
                        message: `${result.name.toUpperCase()} encontrado`,
                        type: NotificationTypeEnum.success
                    });
                },
                error =>
                {
                    this.router.navigate(['/pokemon']);

                    this.notificationService.notify(
                    { 
                        message: 'Pokémon não encontrado!',
                        type: NotificationTypeEnum.error
                    });

                    console.error(`Pokemon não encontrado!${error}`);
                });
            }
        });
    }
}