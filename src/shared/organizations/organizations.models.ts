import {User, UserJson} from "../users/users.models";

export interface Organization {
  organizationId: string;
  name: string;

  users?: User[];
}

export interface OrganizationJson

{
  organization_id: string;
  name: string;

  users?: UserJson[];
}

