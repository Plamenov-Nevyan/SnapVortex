import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupInputsComponent } from './group-inputs.component';

describe('GroupInputsComponent', () => {
  let component: GroupInputsComponent;
  let fixture: ComponentFixture<GroupInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupInputsComponent]
    });
    fixture = TestBed.createComponent(GroupInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
