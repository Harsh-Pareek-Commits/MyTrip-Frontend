import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravelsComponent } from './add-travels.component';

describe('AddTravelsComponent', () => {
  let component: AddTravelsComponent;
  let fixture: ComponentFixture<AddTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTravelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
