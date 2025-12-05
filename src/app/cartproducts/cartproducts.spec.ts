import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartproducts } from './cartproducts';

describe('Cartproducts', () => {
  let component: Cartproducts;
  let fixture: ComponentFixture<Cartproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
