import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsContactsHeaderComponent } from './posts-contacts-header.component';

describe('PostsContactsHeaderComponent', () => {
  let component: PostsContactsHeaderComponent;
  let fixture: ComponentFixture<PostsContactsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsContactsHeaderComponent]
    });
    fixture = TestBed.createComponent(PostsContactsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
