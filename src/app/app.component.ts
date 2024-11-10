import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  template:`
  <nav>
  <a class="button"
       routerLink="/crisis-list"
       routerLinkActive="activebutton"
       ariaCurrentWhenActive="page">
      Crisis Center
    </a> |
    <a class="button"
       routerLink="/heroes-list"
       routerLinkActive="activebutton"
       ariaCurrentWhenActive="page">
      Heroes
    </a>
    </nav>
    <router-outlet />
    `,
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  // imports: [RouterOutlet, CrisisListComponent, HeroesListComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
}
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
