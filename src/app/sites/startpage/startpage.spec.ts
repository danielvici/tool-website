import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Startpage } from './startpage';

describe('Startpage', () => {
  let component: Startpage;
  let fixture: ComponentFixture<Startpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Startpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Startpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
