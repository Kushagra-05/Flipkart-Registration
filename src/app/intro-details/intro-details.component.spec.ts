import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDetailsComponent } from './intro-details.component';

describe('IntroDetailsComponent', () => {
  let component: IntroDetailsComponent;
  let fixture: ComponentFixture<IntroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
