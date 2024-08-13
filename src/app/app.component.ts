import { PrincipalModule } from './principal/principal.module';
import { Component, inject, NgZone } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import {} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './principal/side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrincipalModule,
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.,
FormsModule,RouterLink, PrincipalModule, SideMenuComponent, CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  authService = inject(ApiService);
  title = 'piyamas';
  login: boolean = false;
  constructor (private zone: NgZone, private router: Router) {

    if (this.authService.getUserDetail()) {
      console.log("hola");
    }else{
      this.router.navigate(['/login']);
      console.log("adios");
    }
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
