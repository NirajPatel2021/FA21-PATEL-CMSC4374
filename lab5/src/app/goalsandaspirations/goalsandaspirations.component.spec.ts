import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsandaspirationsComponent } from './goalsandaspirations.component';

describe('GoalsandaspirationsComponent', () => {
  let component: GoalsandaspirationsComponent;
  let fixture: ComponentFixture<GoalsandaspirationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsandaspirationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsandaspirationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
