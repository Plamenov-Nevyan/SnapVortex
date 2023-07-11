import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutsListItemComponent } from './shortcuts-list-item.component';

describe('ShortcutsListItemComponent', () => {
  let component: ShortcutsListItemComponent;
  let fixture: ComponentFixture<ShortcutsListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortcutsListItemComponent]
    });
    fixture = TestBed.createComponent(ShortcutsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
