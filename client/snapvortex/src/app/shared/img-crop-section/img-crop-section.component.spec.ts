import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCropSectionComponent } from './img-crop-section.component';

describe('ImgCropSectionComponent', () => {
  let component: ImgCropSectionComponent;
  let fixture: ComponentFixture<ImgCropSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgCropSectionComponent]
    });
    fixture = TestBed.createComponent(ImgCropSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
