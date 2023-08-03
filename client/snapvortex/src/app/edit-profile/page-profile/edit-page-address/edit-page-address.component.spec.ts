import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageAddressComponent } from './edit-page-address.component';

describe('EditPageAddressComponent', () => {
  let component: EditPageAddressComponent;
  let fixture: ComponentFixture<EditPageAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPageAddressComponent]
    });
    fixture = TestBed.createComponent(EditPageAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
