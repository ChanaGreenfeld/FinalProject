import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerbranchmanagerComponent } from './managerbranchmanager.component';

describe('ManagerbranchmanagerComponent', () => {
  let component: ManagerbranchmanagerComponent;
  let fixture: ComponentFixture<ManagerbranchmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerbranchmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerbranchmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
