import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdApiComponent } from './get-by-id-api.component';

describe('GetByIdApiComponent', () => {
  let component: GetByIdApiComponent;
  let fixture: ComponentFixture<GetByIdApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByIdApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
