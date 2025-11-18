import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDescription } from './custom-description';

describe('CustomDescription', () => {
  let component: CustomDescription;
  let fixture: ComponentFixture<CustomDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
