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

export function convertModelToFormGroup(organization?: Organization): FormGroup {
  if (organization) {
    return new FormGroup({
      id: new FormControl(organization.organizationId),
      name: new FormControl(organization.name, [Validators.required]),
    });
  }
  else {
    return emptyFormGroup();
  }
}

export function emptyFormGroup() {
  return new FormGroup({
    id: new FormControl(""),
    name: new FormControl("", [Validators.required]),
  });
}

export function convertFormGroupToModel(formGroup: FormGroup): Organization {
  return {
    organizationId: formGroup.get("id").value,
    name: formGroup.get("name").value
  }
}
