import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIt } from './test-it';

describe('TestIt', () => {
  let component: TestIt;
  let fixture: ComponentFixture<TestIt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestIt],
    }).compileComponents();

    fixture = TestBed.createComponent(TestIt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
