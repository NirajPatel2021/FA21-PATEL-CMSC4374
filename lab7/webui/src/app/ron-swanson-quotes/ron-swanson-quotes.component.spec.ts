import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RonSwansonQuotesComponent } from './ron-swanson-quotes.component';

describe('RonSwansonQuotesComponent', () => {
  let component: RonSwansonQuotesComponent;
  let fixture: ComponentFixture<RonSwansonQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RonSwansonQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RonSwansonQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
