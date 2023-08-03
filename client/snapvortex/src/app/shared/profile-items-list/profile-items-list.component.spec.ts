import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileItemsListComponent } from './profile-items-list.component';

describe('ProfileItemsListComponent', () => {
  let component: ProfileItemsListComponent;
  let fixture: ComponentFixture<ProfileItemsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileItemsListComponent]
    });
    fixture = TestBed.createComponent(ProfileItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
