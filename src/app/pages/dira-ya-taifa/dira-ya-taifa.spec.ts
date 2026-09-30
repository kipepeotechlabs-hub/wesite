import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiraYaTaifa } from './dira-ya-taifa';

describe('DiraYaTaifa', () => {
  let component: DiraYaTaifa;
  let fixture: ComponentFixture<DiraYaTaifa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiraYaTaifa],
    }).compileComponents();

    fixture = TestBed.createComponent(DiraYaTaifa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
