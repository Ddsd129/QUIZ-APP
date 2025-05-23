import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardQuizComponent } from './hard-quiz.component';

describe('HardQuizComponent', () => {
  let component: HardQuizComponent;
  let fixture: ComponentFixture<HardQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
