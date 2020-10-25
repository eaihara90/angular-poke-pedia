import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component(
{
    selector: 'poke-info-status',
    templateUrl: './info-status.component.html',
    styleUrls: ['./info-status.component.scss']
})
export class InfoStatusComponent implements OnInit
{
    @Input() pokemon: Pokemon;

    constructor() { }

    ngOnInit(): void
    {
        //console.log(this.pokemon.stats);
    }

}
