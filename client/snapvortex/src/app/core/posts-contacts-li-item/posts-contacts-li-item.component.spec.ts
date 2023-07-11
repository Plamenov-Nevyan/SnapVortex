import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsContactsLiItemComponent } from './posts-contacts-li-item.component';

describe('PostsContactsLiItemComponent', () => {
  let component: PostsContactsLiItemComponent;
  let fixture: ComponentFixture<PostsContactsLiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsContactsLiItemComponent]
    });
    fixture = TestBed.createComponent(PostsContactsLiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
