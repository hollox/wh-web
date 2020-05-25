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

export function convertModelToFormGroup(user: User): FormGroup {
    return new FormGroup({
      user_id: new FormControl(user.userId),
      organization_id: new FormControl(user.organizationId, [Validators.required]),
      email: new FormControl(user.email, [Validators.required]),
      firstname: new FormControl(user.firstname),
      lastname: new FormControl(user.lastname),
    });
}

export function convertFormGroupToModel(formGroup: FormGroup): User {
  return {
    userId: formGroup.get("user_id").value,
    organizationId: formGroup.get("organization_id").value,
    email: formGroup.get("email").value,
    firstname: formGroup.get("firstname").value,
    lastname: formGroup.get("lastname").value
  }
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
