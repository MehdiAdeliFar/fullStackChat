import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewVideoComponent } from './admin-new-video.component';

describe('AdminNewVideoComponent', () => {
  let component: AdminNewVideoComponent;
  let fixture: ComponentFixture<AdminNewVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
