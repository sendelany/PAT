import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueCustomerComponent } from './queue-customer.component';

describe('QueueCustomerComponent', () => {
  let component: QueueCustomerComponent;
  let fixture: ComponentFixture<QueueCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
