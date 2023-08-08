import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliesListComponent } from './replies-list.component';

describe('RepliesListComponent', () => {
  let component: RepliesListComponent;
  let fixture: ComponentFixture<RepliesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepliesListComponent]
    });
    fixture = TestBed.createComponent(RepliesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
