import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraperResultsComponent } from './scraper-results.component';

describe('ScraperResultsComponent', () => {
  let component: ScraperResultsComponent;
  let fixture: ComponentFixture<ScraperResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScraperResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScraperResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
