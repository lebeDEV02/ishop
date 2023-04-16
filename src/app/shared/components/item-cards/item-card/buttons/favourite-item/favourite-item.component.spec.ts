import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteItemButtonComponent } from './favourite-item.component';

describe('FavouriteItemButtonComponent', () => {
  let component: FavouriteItemButtonComponent;
  let fixture: ComponentFixture<FavouriteItemButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouriteItemButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
