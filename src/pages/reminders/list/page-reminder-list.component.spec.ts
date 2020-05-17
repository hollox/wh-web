import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReminderListComponent } from './page-reminder-list.component';

describe('PageReminderListComponent', () => {
  let component: PageReminderListComponent;
  let fixture: ComponentFixture<PageReminderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReminderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReminderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
