import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';
import { WhosThatComponent } from './whos-that/whos-that.component';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list/list-item/list-item.component';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { DefaultIdLengthPipe } from './shared/pipes/default-id-length.pipe';
import { InfoStatusComponent } from './info/info-status/info-status.component';
import { InfoDefaultComponent } from './info/info-default/info-default.component';
import { InfoEvolutionComponent } from './info/info-evolution/info-evolution.component';
import { NotificationComponent } from './shared/components/notification/notification.component';



@NgModule(
{
    declarations: [
        AppComponent,
        HeaderComponent,
        InfoComponent,
        ListComponent,
        WhosThatComponent,
        ListItemComponent,
        CapitalizePipe,
        DefaultIdLengthPipe,
        InfoStatusComponent,
        InfoDefaultComponent,
        InfoEvolutionComponent,
        NotificationComponent

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        AppRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
