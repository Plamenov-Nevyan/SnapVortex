import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInputsComponent } from './page-inputs.component';

describe('PageInputsComponent', () => {
  let component: PageInputsComponent;
  let fixture: ComponentFixture<PageInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageInputsComponent]
    });
    fixture = TestBed.createComponent(PageInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
