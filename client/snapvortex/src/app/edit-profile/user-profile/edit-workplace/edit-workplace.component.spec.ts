import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkplaceComponent } from './edit-workplace.component';

describe('EditWorkplaceComponent', () => {
  let component: EditWorkplaceComponent;
  let fixture: ComponentFixture<EditWorkplaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditWorkplaceComponent]
    });
    fixture = TestBed.createComponent(EditWorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
