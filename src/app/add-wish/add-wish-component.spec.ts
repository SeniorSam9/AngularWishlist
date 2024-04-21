import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishComponent } from './add-wish-component';

describe('AddWishComponentComponent', () => {
  let component: AddWishComponent;
  let fixture: ComponentFixture<AddWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWishComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
