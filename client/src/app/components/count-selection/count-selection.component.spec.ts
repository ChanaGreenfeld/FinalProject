import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSelectionComponent } from './count-selection.component';

describe('CountSelectionComponent', () => {
  let component: CountSelectionComponent;
  let fixture: ComponentFixture<CountSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
