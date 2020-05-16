import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTicketListComponent } from './page-ticket-list.component';

describe('PageTicketListComponent', () => {
  let component: PageTicketListComponent;
  let fixture: ComponentFixture<PageTicketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTicketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
