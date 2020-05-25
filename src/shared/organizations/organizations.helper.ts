import {Organization, OrganizationJson} from './organizations.models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as usersHelper from '../users/users.helper';

export function convertJsonToModels(organizations: OrganizationJson[]): Organization[] {
  return organizations.map(convertJsonToModel);
}

export function convertJsonToModel(organization: OrganizationJson): Organization {
  return {
    organizationId: organization.organization_id,
    name: organization.name,
    users: organization.users && usersHelper.convertJsonToModels(organization.users)
  };
}

export function convertModelToJson(organization: Organization): OrganizationJson {
  return {
    organization_id: organization.organizationId,
    name: organization.name
  };
}

export function newFormGroup(): FormGroup {
  return new FormGroup({
    organizationId: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    users: new FormControl([]),
  });
}

export function newOrganization(organization?: Partial<Organization>): Organization {
  return {
    organizationId: '',
    name: '',
    users: [],
    ...organization
  };
}
