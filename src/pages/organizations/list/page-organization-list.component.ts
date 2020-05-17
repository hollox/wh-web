import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-organization-list',
  templateUrl: './page-organization-list.component.html',
  styleUrls: ['./page-organization-list.component.scss']
})
export class PageOrganizationListComponent {

  constructor(private router: Router) { }

  onCreateClick(): void {
    this.router.navigate(['/organization']);
  }
}
