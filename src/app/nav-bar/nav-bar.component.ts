import { Component } from '@angular/core';
import { AuthService } from '../../shared/authentication/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  {
  constructor(public authService: AuthService) {
  }
}
