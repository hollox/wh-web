import {Organization, OrganizationJson} from "./organizations.models";

export function convertOrganizationsJsonToModel(organizations: OrganizationJson[]): Organization[] {
  return organizations.map(convertOrganizationJsonToModel);
}

function convertOrganizationJsonToModel(organization: OrganizationJson): Organization {
  return {
    organizationId: organization.organization_id,
    name: organization.name
  }
}
