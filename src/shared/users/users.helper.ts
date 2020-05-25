import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User, UserJson} from "./users.models";

export function convertJsonToModels(users: UserJson[]): User[] {
  return users.map(convertJsonToModel);
}

export function convertJsonToModel(user: UserJson): User {
  return {
    userId: user.user_id,
    organizationId: user.organization_id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname
  }
}

export function convertModelToJson(user: User): UserJson {
  return {
    user_id: user.userId,
    organization_id: user.organizationId,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname
  }
}

export function newFormGroup(): FormGroup {
    return new FormGroup({
      userId: new FormControl(null),
      organizationId: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      firstname: new FormControl(null),
      lastname: new FormControl(null),
    });
}

export function newUser(user?: Partial<User>): User {
  return {
    userId: "",
    organizationId: "",
    email: "",
    firstname: "",
    lastname: "",
    ...user
  }
}
