import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleProductComponent } from './detaille-product.component';

describe('DetailleProductComponent', () => {
  let component: DetailleProductComponent;
  let fixture: ComponentFixture<DetailleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
