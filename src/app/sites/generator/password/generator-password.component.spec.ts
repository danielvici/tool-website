import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorPassword } from './generator-password.component';

describe('Password', () => {
  let component: GeneratorPassword;
  let fixture: ComponentFixture<GeneratorPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratorPassword],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratorPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
