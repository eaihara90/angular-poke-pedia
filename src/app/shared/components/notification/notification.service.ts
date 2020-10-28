import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationData } from './notification-data.interface';

@Injectable(
{
    providedIn: 'root'
})

export class NotificationService
{
    public notification = new EventEmitter<NotificationData>()

    public notify(messageData: NotificationData)
    {
        this.notification.emit(messageData);
    }
}