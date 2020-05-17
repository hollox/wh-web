import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrganizationListComponent } from './page-organization-list.component';

describe('PageOrganizationListComponent', () => {
  let component: PageOrganizationListComponent;
  let fixture: ComponentFixture<PageOrganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOrganizationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
