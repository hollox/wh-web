import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrganizationDetailComponent } from './page-organization-detail.component';

describe('PageOrganizationDetailComponent', () => {
  let component: PageOrganizationDetailComponent;
  let fixture: ComponentFixture<PageOrganizationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOrganizationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOrganizationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
