import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comingsoon } from './comingsoon';

describe('Comingsoon', () => {
  let component: Comingsoon;
  let fixture: ComponentFixture<Comingsoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comingsoon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comingsoon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
