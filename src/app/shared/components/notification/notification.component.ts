import { Component, Input, OnInit } from '@angular/core';

@Component(
{
    selector: 'poke-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit
{
    @Input() errorMessage: string;

    constructor() { }

    ngOnInit(): void { }

}
