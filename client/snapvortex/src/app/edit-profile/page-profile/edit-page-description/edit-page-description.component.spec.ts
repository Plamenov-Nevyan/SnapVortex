import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageDescriptionComponent } from './edit-page-description.component';

describe('EditPageDescriptionComponent', () => {
  let component: EditPageDescriptionComponent;
  let fixture: ComponentFixture<EditPageDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPageDescriptionComponent]
    });
    fixture = TestBed.createComponent(EditPageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
