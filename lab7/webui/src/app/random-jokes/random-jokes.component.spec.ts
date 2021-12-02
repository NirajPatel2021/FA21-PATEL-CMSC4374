import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomJokesComponent } from './random-jokes.component';

describe('random-jokesComponent', () => {
  let component: RandomJokesComponent;
  let fixture: ComponentFixture<RandomJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
