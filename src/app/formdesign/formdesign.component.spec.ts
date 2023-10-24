import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdesignComponent } from './formdesign.component';

describe('FormdesignComponent', () => {
  let component: FormdesignComponent;
  let fixture: ComponentFixture<FormdesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormdesignComponent]
    });
    fixture = TestBed.createComponent(FormdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});