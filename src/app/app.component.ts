import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokeInfoService } from './shared/services/poke-info.service';

@Component(
{
    selector: 'poke-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    public isOpenPokeInfo: boolean;
    private subscription = new Subscription();
    
    constructor(private pokeInfoService: PokeInfoService) { }

    ngOnInit(): void
    {
        this.subscription.add(this.pokeInfoService.openPokeInfo.subscribe((isOpen: boolean) =>
        {
            this.isOpenPokeInfo = isOpen;
        }));
    }

    ngOnDestroy(): void
    {
        this.subscription.unsubscribe();
    }
}
