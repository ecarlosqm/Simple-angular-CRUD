import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLIstComponent } from './product-list.component';

describe('ProductLIstComponent', () => {
  let component: ProductLIstComponent;
  let fixture: ComponentFixture<ProductLIstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLIstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
