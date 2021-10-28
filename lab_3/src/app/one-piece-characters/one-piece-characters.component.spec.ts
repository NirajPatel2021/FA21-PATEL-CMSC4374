import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePieceCharactersComponent } from './one-piece-characters.component';

describe('OnePieceCharactersComponent', () => {
  let component: OnePieceCharactersComponent;
  let fixture: ComponentFixture<OnePieceCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePieceCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePieceCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
