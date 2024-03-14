import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilersComponent } from './profiler.component';

describe('ProfilerComponent', () => {
  let component: ProfilersComponent;
  let fixture: ComponentFixture<ProfilersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
