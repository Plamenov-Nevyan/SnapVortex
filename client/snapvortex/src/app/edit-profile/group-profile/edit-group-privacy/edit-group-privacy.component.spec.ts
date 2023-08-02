import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupPrivacyComponent } from './edit-group-privacy.component';

describe('EditGroupPrivacyComponent', () => {
  let component: EditGroupPrivacyComponent;
  let fixture: ComponentFixture<EditGroupPrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGroupPrivacyComponent]
    });
    fixture = TestBed.createComponent(EditGroupPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
