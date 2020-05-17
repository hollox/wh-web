import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrganizationsService} from "../../../shared/organizations/organizations.service";

@Component({
  selector: 'app-page-organization-detail',
  templateUrl: './page-organization-detail.component.html',
  styleUrls: ['./page-organization-detail.component.scss']
})
export class PageOrganizationDetailComponent implements OnInit {

  // organizationFormGroup: FormGroup;

  constructor(public route: ActivatedRoute, public organizationService: OrganizationsService) { }

  ngOnInit(): void {
    // this.organizationFormGroup = new FormGroup({
    //   id: new FormControl(),
    //   name: new FormControl(null, [Validators.required]),
    // });
  }

  onSubmit(): void {
    // console.log(this.organizationFormGroup);
    // this.organizationFormGroup.reset();
  }
}
