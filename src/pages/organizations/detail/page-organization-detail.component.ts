import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {OrganizationsService} from "../../../shared/organizations/organizations.service";
import {FormGroup} from "@angular/forms";
import {filter, first, mergeMap} from "rxjs/operators";
import {Organization} from "../../../shared/organizations/organizations.models";
import {
  convertFormGroupToModel,
  convertModelToFormGroup,
  emptyFormGroup
} from "../../../shared/organizations/organizations.helper";
import {Subscription, EMPTY} from "rxjs";

@Component({
  selector: 'app-page-organization-detail',
  templateUrl: './page-organization-detail.component.html',
  styleUrls: ['./page-organization-detail.component.scss']
})
export class PageOrganizationDetailComponent implements OnInit, OnDestroy {

  organizationFormGroup = emptyFormGroup();
  getByIdSub = Subscription.EMPTY;

  constructor(public route: ActivatedRoute, public organizationService: OrganizationsService) { }

  ngOnInit(): void {
    this.getByIdSub = this.route.params.pipe(
      filter((params: Params) => !!params["organizationId"]),
      mergeMap((params: Params) => {
        return this.organizationService.getOrganizationById$(params["organizationId"]);
      }
    )).subscribe((organization: Organization) => {
      console.log({organization});
      this.organizationFormGroup = convertModelToFormGroup(organization);
    });
  }

  ngOnDestroy() {
    this.getByIdSub.unsubscribe();
  }

  onSubmit(): void {
    if (this.organizationFormGroup.invalid) {
      return;
    }

    const organization = convertFormGroupToModel(this.organizationFormGroup);
    this.organizationService.saveOrganization$(organization).subscribe((organization: Organization) => {
      this.organizationFormGroup = convertModelToFormGroup(organization);
    })
  }
}
