import { Component } from '@angular/core';
import { AuthService } from '../../shared/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  {

  public isCollapsed = true;

  constructor(public authService: AuthService) {
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
