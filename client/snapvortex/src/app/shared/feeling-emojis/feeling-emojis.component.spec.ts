import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingEmojisComponent } from './feeling-emojis.component';

describe('FeelingEmojisComponent', () => {
  let component: FeelingEmojisComponent;
  let fixture: ComponentFixture<FeelingEmojisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeelingEmojisComponent]
    });
    fixture = TestBed.createComponent(FeelingEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
