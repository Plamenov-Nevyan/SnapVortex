import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsOwnerComponent } from './contacts-owner.component';

describe('ContactsOwnerComponent', () => {
  let component: ContactsOwnerComponent;
  let fixture: ComponentFixture<ContactsOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsOwnerComponent]
    });
    fixture = TestBed.createComponent(ContactsOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
