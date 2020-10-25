import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';


import { WhosThatComponent } from './whos-that/whos-that.component';

const routes: Routes = [
    { path: '', redirectTo: '/pokemon', pathMatch: 'full'},
    { path: 'pokemon', component: WhosThatComponent },
    { path: 'pokemon/:name', component: InfoComponent }
]

@NgModule(
{
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }