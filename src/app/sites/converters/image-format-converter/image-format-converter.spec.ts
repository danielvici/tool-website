import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFormatConverter } from './image-format-converter';

describe('ImageFormatConverter', () => {
  let component: ImageFormatConverter;
  let fixture: ComponentFixture<ImageFormatConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageFormatConverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageFormatConverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
