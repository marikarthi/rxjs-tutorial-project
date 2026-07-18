import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorTest } from './operator-test';

describe('OperatorTest', () => {
  let component: OperatorTest;
  let fixture: ComponentFixture<OperatorTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
