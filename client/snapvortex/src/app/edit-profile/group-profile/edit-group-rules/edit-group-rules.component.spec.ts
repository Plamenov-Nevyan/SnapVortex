import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupRulesComponent } from './edit-group-rules.component';

describe('EditGroupRulesComponent', () => {
  let component: EditGroupRulesComponent;
  let fixture: ComponentFixture<EditGroupRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGroupRulesComponent]
    });
    fixture = TestBed.createComponent(EditGroupRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
