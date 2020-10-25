import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component(
{
    selector: 'poke-info-default',
    templateUrl: './info-default.component.html',
    styleUrls: ['./info-default.component.scss']
})
export class InfoDefaultComponent implements OnInit
{

    @Input() pokemon: Pokemon;
    @Output() openClose = new EventEmitter<boolean>();
    public isOpen: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    public showMoreInfo()
    {
        this.isOpen = !this.isOpen;
        this.openClose.emit(this.isOpen);
    }
}
