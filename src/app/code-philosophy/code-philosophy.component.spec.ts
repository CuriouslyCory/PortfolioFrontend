import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePhilosophyComponent } from './code-philosophy.component';

describe('CodePhilosophyComponent', () => {
  let component: CodePhilosophyComponent;
  let fixture: ComponentFixture<CodePhilosophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
