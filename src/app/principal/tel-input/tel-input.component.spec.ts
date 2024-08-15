import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTelInput } from './tel-input.component';

describe('TelInputComponent', () => {
  let component: MyTelInput;
  let fixture: ComponentFixture<MyTelInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTelInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTelInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
