import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronFormComponent } from './cron-form.component';

describe('CronFormComponent', () => {
  let component: CronFormComponent;
  let fixture: ComponentFixture<CronFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CronFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
