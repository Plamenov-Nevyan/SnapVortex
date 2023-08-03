import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageNameComponent } from './edit-page-name.component';

describe('EditPageNameComponent', () => {
  let component: EditPageNameComponent;
  let fixture: ComponentFixture<EditPageNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPageNameComponent]
    });
    fixture = TestBed.createComponent(EditPageNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
