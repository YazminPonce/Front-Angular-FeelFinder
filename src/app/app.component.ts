import { PrincipalModule } from './principal/principal.module';
import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './principal/side-menu/side-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrincipalModule,HttpClientModule,FormsModule,RouterLink, PrincipalModule, SideMenuComponent, CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'piyamas';
  login: boolean = false;
  constructor (private zone: NgZone, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/registro' ) {
          this.login= true;
        } else {
          this.login= false;
        }
      }
    });
  }
}
