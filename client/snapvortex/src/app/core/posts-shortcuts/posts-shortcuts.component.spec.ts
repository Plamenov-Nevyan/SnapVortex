import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsShortcutsComponent } from './posts-shortcuts.component';

describe('PostsShortcutsComponent', () => {
  let component: PostsShortcutsComponent;
  let fixture: ComponentFixture<PostsShortcutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsShortcutsComponent]
    });
    fixture = TestBed.createComponent(PostsShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
