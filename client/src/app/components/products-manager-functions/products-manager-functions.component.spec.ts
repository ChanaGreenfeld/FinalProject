import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsManagerFunctionsComponent } from './products-manager-functions.component';

describe('ProductsManagerFunctionsComponent', () => {
  let component: ProductsManagerFunctionsComponent;
  let fixture: ComponentFixture<ProductsManagerFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsManagerFunctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsManagerFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
