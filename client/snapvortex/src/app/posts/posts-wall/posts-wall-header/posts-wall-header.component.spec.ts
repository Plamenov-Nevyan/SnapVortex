import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsWallHeaderComponent } from './posts-wall-header.component';

describe('PostsWallHeaderComponent', () => {
  let component: PostsWallHeaderComponent;
  let fixture: ComponentFixture<PostsWallHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsWallHeaderComponent]
    });
    fixture = TestBed.createComponent(PostsWallHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
