import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent ],
      imports: [BrowserAnimationsModule, MatInputModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a text input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
  });

  it('should have a submit button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });
});
