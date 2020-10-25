import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component(
{
    selector: 'poke-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit
{

    @Input() pokemon: Pokemon;

    constructor() { }

    ngOnInit(): void { }

}
