import { Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    //{path: '**', component: PageNotFoundComponent},
    {path: 'crisis-list', component: CrisisListComponent},
    {path: 'heroes-list', component: HeroesListComponent}];

