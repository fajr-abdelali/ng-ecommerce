import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishButtonComponent } from './wish-button.component';

describe('WishButtonComponent', () => {
  let component: WishButtonComponent;
  let fixture: ComponentFixture<WishButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishButtonComponent]
    });
    fixture = TestBed.createComponent(WishButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
