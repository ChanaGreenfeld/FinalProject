import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagerFunctionsComponent } from './category-manager-functions.component';

describe('CategoryManagerFunctionsComponent', () => {
  let component: CategoryManagerFunctionsComponent;
  let fixture: ComponentFixture<CategoryManagerFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryManagerFunctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryManagerFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
