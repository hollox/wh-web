import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTicketDetailComponent } from './page-ticket-detail.component';

describe('PageTickeDetailComponent', () => {
  let component: PageTicketDetailComponent;
  let fixture: ComponentFixture<PageTicketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTicketDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
