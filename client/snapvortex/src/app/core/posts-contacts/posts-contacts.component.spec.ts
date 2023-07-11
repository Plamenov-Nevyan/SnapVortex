import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsContactsComponent } from './posts-contacts.component';

describe('PostsContactsComponent', () => {
  let component: PostsContactsComponent;
  let fixture: ComponentFixture<PostsContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsContactsComponent]
    });
    fixture = TestBed.createComponent(PostsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
