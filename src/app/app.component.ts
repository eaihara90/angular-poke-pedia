import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokeInfoService } from './shared/services/poke-info.service';
import { trigger, style, animate, state, transition } from '@angular/animations';

@Component(
{
    selector: 'poke-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    private subscription = new Subscription();
    public isOpenPokeInfo: boolean;
    
    constructor(private pokeInfoService: PokeInfoService) { }

    ngOnInit(): void
    {
        this.subscription.add(this.pokeInfoService.openPokeInfo.subscribe((isOpen: boolean) =>
        {
            this.isOpenPokeInfo = isOpen;
        }));
    }
}
