import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliesLiItemComponent } from './replies-li-item.component';

describe('RepliesLiItemComponent', () => {
  let component: RepliesLiItemComponent;
  let fixture: ComponentFixture<RepliesLiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepliesLiItemComponent]
    });
    fixture = TestBed.createComponent(RepliesLiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
