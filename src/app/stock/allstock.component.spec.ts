import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStockComponent } from './allstock.component';

describe('StockComponent', () => {
  let component: AllStockComponent;
  let fixture: ComponentFixture<AllStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
