import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersStatusComponent } from './view-orders-status.component';

describe('ViewOrdersStatusComponent', () => {
  let component: ViewOrdersStatusComponent;
  let fixture: ComponentFixture<ViewOrdersStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrdersStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
