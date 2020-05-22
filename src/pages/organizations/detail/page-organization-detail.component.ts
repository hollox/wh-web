import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {OrganizationsService} from "../../../shared/organizations/organizations.service";
import {mergeMap} from "rxjs/operators";
import {Organization} from "../../../shared/organizations/organizations.models";
import * as organizationsHelper from "../../../shared/organizations/organizations.helper";
import {of, Subscription} from "rxjs";
import * as usersHelper from "../../../shared/users/users.helper";
import {FormGroup} from "@angular/forms";
import {UsersService} from "../../../shared/users/users.service";
import {User} from "../../../shared/users/users.models";

@Component({
  selector: 'app-page-organization-detail',
  templateUrl: './page-organization-detail.component.html',
  styleUrls: ['./page-organization-detail.component.scss']
})
export class PageOrganizationDetailComponent implements OnInit, OnDestroy {

  organizationFormGroup: FormGroup;
  userFormGroup: FormGroup;
  getOrganizationByIdSub = Subscription.EMPTY;

  users: User[];
  dataLoaded: boolean;

  constructor(public route: ActivatedRoute, public organizationService: OrganizationsService, public usersService: UsersService) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.getOrganizationByIdSub = this.route.params.pipe(
      mergeMap((params: Params) => {
        if (params["organizationId"]) {
          return this.organizationService.getById$(params["organizationId"]);
        } else {
          return of(organizationsHelper.newOrganization());
        }
      }
    )).subscribe((organization: Organization) => {
      this.organizationFormGroup = organizationsHelper.convertModelToFormGroup(organization);
      this.users = organization.users || [];

      const user = usersHelper.newUser();

      console.log({user});
      this.userFormGroup = usersHelper.convertModelToFormGroup(user);

      console.log({userFormGroup: this.userFormGroup, users: this.users.length});
      this.dataLoaded = true;
    });
  }

  ngOnDestroy() {
    this.getOrganizationByIdSub.unsubscribe();
  }

  onOrganizationSubmit(): void {
    if (this.organizationFormGroup.invalid) {
      return;
    }

    const organization = organizationsHelper.convertFormGroupToModel(this.organizationFormGroup);
    this.organizationService.save$(organization).subscribe((organization: Organization) => {
      this.organizationFormGroup = organizationsHelper.convertModelToFormGroup(organization);
    })
  }

  onUserSubmit(): void {
    if (this.userFormGroup.invalid) {
      return;
    }

    const user = usersHelper.convertFormGroupToModel(this.userFormGroup);
    this.usersService.save$(user).subscribe((user: User) => {
      this.users = this.users.filter(u => u.userId !== user.userId);
      this.users.push(user);
      this.userFormGroup = usersHelper.convertModelToFormGroup(user);
    })
  }

  onRowClick(user: User): void {
    this.userFormGroup = usersHelper.convertModelToFormGroup(user);
  }
}
