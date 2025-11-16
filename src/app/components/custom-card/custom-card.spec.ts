import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCard } from './custom-card';

describe('CustomCard', () => {
  let component: CustomCard;
  let fixture: ComponentFixture<CustomCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
