import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPicturesComponent } from './carousel-pictures.component';

describe('CarouselPicturesComponent', () => {
  let component: CarouselPicturesComponent;
  let fixture: ComponentFixture<CarouselPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPicturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
