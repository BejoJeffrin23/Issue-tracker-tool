import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedIssueComponent } from './assigned-issue.component';

describe('AssignedIssueComponent', () => {
  let component: AssignedIssueComponent;
  let fixture: ComponentFixture<AssignedIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
