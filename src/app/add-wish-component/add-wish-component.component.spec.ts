import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishComponentComponent } from './add-wish-component.component';

describe('AddWishComponentComponent', () => {
  let component: AddWishComponentComponent;
  let fixture: ComponentFixture<AddWishComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWishComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWishComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
