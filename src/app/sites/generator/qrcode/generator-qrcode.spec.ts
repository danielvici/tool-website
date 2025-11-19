import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorQrcode } from './generator-qrcode';

describe('GeneratorQrcode', () => {
  let component: GeneratorQrcode;
  let fixture: ComponentFixture<GeneratorQrcode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratorQrcode],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratorQrcode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
