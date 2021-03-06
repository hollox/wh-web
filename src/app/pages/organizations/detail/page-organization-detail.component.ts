import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {OrganizationsService} from '../../../../shared/organizations/organizations.service';
import {mergeMap} from 'rxjs/operators';
import {Organization} from '../../../../shared/organizations/organizations.models';
import * as organizationsHelper from '../../../../shared/organizations/organizations.helper';
import {of, Subscription} from 'rxjs';
import * as usersHelper from '../../../../shared/users/users.helper';
import {FormGroup} from '@angular/forms';
import {UsersService} from '../../../../shared/users/users.service';
import {User} from '../../../../shared/users/users.models';

@Component({
  selector: 'app-page-organization-detail',
  templateUrl: './page-organization-detail.component.html',
  styleUrls: ['./page-organization-detail.component.scss']
})
export class PageOrganizationDetailComponent implements OnInit, OnDestroy {

  organizationFormGroup: FormGroup;
  userFormGroup: FormGroup;
  getOrganizationByIdSub = Subscription.EMPTY;

  dataLoaded: boolean;

  constructor(public route: ActivatedRoute, public organizationsService: OrganizationsService, public usersService: UsersService) { }

  ngOnInit(): void {
    this.dataLoaded = false;

    this.organizationFormGroup = organizationsHelper.newFormGroup();
    this.userFormGroup = usersHelper.newFormGroup();
    this.userFormGroup.disable();

    this.getOrganizationByIdSub = this.route.params.pipe(
      mergeMap((params: Params) => {
        if (params.organizationId) {
          return this.organizationsService.getById$(params.organizationId);
        } else {
          return of(organizationsHelper.newOrganization());
        }
      }
    )).subscribe((organization: Organization) => {
      this.organizationFormGroup.setValue(organization);
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

    const organization = this.organizationFormGroup.getRawValue();
    this.organizationsService.save$(organization).subscribe((o: Organization) => {
      this.organizationFormGroup.setValue(o);
      this.userFormGroup.patchValue({ organizationId: o.organizationId });
    });
  }

  onUserSubmit(): void {
    if (this.userFormGroup.invalid) {
      return;
    }

    const user = this.userFormGroup.getRawValue();
    this.usersService.save$(user).subscribe((u: User) => {
      const users = this.organizationFormGroup.get('users').value;
      const newUsers = this.replaceUser(u, users);
      this.organizationFormGroup.patchValue({ users: newUsers });

      const blankUser = usersHelper.newUser({ organizationId: u.organizationId });
      this.userFormGroup.reset(blankUser);
    });
  }

  replaceUser(user: User, users: User[]): User[] {
    const filteredUsers = users.filter(u => u.userId !== user.userId);
    return [...filteredUsers, user];
  }

  onRowClick(user: User): void {
    this.userFormGroup.setValue(user);
    this.userFormGroup.enable();
  }

  onNewUserClick(): void {
    const organizationId = this.organizationFormGroup.get('organizationId').value as string;
    const user = usersHelper.newUser({organizationId});
    this.userFormGroup.setValue(user);
    this.userFormGroup.enable();
  }
}
