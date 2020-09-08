import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatCardsListComponent } from './flat-cards-list.component';

describe('FlatCardsListComponent', () => {
  let component: FlatCardsListComponent;
  let fixture: ComponentFixture<FlatCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
