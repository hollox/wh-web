import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OrganizationsService} from '../../../../shared/organizations/organizations.service';
import {Organization} from '../../../../shared/organizations/organizations.models';

@Component({
  selector: 'app-page-organization-list',
  templateUrl: './page-organization-list.component.html',
  styleUrls: ['./page-organization-list.component.scss']
})
export class PageOrganizationListComponent implements OnInit {

  public organizations: Organization[] = [];

  constructor(private router: Router, private organizationsService: OrganizationsService) { }

  ngOnInit(): void {
    this.organizationsService.getOrganizations$().subscribe((organizations: Organization[]) => {
      this.organizations = organizations;
    });
  }

  onCreateClick(): void {
    this.router.navigate(['/organization']);
  }

  onRowClick(organizationId: string): void {
    this.router.navigate(['/organization', organizationId]);
  }
}
