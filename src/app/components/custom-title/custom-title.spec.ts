import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTitle } from './custom-title';

describe('CustomTitle', () => {
  let component: CustomTitle;
  let fixture: ComponentFixture<CustomTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
