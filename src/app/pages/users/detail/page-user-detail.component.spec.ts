import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserDetailComponent } from './page-user-detail.component';

describe('PageUserDetailComponent', () => {
  let component: PageUserDetailComponent;
  let fixture: ComponentFixture<PageUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
