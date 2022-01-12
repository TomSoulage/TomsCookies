import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCookieComponent } from './update-cookie.component';

describe('UpdateCookieComponent', () => {
  let component: UpdateCookieComponent;
  let fixture: ComponentFixture<UpdateCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCookieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
