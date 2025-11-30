import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productsholder } from './productsholder';

describe('Productsholder', () => {
  let component: Productsholder;
  let fixture: ComponentFixture<Productsholder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productsholder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productsholder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
