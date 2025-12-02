import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWithIconComponent } from './item-with-icon-component';

describe('ItemWithIconComponent', () => {
  let component: ItemWithIconComponent;
  let fixture: ComponentFixture<ItemWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemWithIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
