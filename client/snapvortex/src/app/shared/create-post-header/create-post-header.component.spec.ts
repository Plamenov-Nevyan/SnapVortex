import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostHeaderComponent } from './create-post-header.component';

describe('CreatePostHeaderComponent', () => {
  let component: CreatePostHeaderComponent;
  let fixture: ComponentFixture<CreatePostHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostHeaderComponent]
    });
    fixture = TestBed.createComponent(CreatePostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
