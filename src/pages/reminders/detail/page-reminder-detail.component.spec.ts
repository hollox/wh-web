import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReminderDetailComponent } from './page-reminder-detail.component';

describe('PageReminderDetailComponent', () => {
  let component: PageReminderDetailComponent;
  let fixture: ComponentFixture<PageReminderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReminderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReminderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
