import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumQuizComponent } from './medium-quiz.component';

describe('MediumQuizComponent', () => {
  let component: MediumQuizComponent;
  let fixture: ComponentFixture<MediumQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
