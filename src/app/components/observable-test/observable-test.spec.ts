import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTest } from './observable-test';

describe('ObservableTest', () => {
  let component: ObservableTest;
  let fixture: ComponentFixture<ObservableTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
