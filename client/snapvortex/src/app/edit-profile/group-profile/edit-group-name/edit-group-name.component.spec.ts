import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupNameComponent } from './edit-group-name.component';

describe('EditGroupNameComponent', () => {
  let component: EditGroupNameComponent;
  let fixture: ComponentFixture<EditGroupNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGroupNameComponent]
    });
    fixture = TestBed.createComponent(EditGroupNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
