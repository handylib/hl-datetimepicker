import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumSelectorComponent } from './num-selector.component';

describe('NumSelectorComponent', () => {
  let component: NumSelectorComponent;
  let fixture: ComponentFixture<NumSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
