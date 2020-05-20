import {Organization, OrganizationJson} from "./organizations.models";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export function convertJsonToModels(organizations: OrganizationJson[]): Organization[] {
  return organizations.map(convertJsonToModel);
}

export function convertJsonToModel(organization: OrganizationJson): Organization {
  return {
    organizationId: organization.organization_id,
    name: organization.name
  }
}

export function convertModelToJson(organization: Organization): OrganizationJson {
  return {
    organization_id: organization.organizationId,
    name: organization.name
  }
}

export function convertModelToFormGroup(organization: Organization): FormGroup {
  return new FormGroup({
    organization_id: new FormControl(organization.organizationId),
    name: new FormControl(organization.name, [Validators.required]),
  });
}

export function convertFormGroupToModel(formGroup: FormGroup): Organization {
  return {
    organizationId: formGroup.get("organization_id").value,
    name: formGroup.get("name").value
  }
}

export function newOrganization(organization?: Partial<Organization>): Organization {
  return {
    organizationId: "",
    name: "",
    ...organization
  }
}
