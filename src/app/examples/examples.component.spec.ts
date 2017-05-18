import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: ExamplesComponent;
  let fixture: ComponentFixture<ExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplesComponent]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesComponent);
    component = fixture.componentInstance;
  });

  it('fooooo', () => {
    expect(function () {
          component.ngOnInit();
        }
    ).toThrow(new Error('OMG!'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
