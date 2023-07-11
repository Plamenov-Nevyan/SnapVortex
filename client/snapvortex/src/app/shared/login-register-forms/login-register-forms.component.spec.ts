import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterFormsComponent } from './login-register-forms.component';

describe('LoginRegisterFormsComponent', () => {
  let component: LoginRegisterFormsComponent;
  let fixture: ComponentFixture<LoginRegisterFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegisterFormsComponent]
    });
    fixture = TestBed.createComponent(LoginRegisterFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
