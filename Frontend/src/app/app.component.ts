import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CronFormComponent } from './components/cron-form/cron-form.component';
import { ScraperResultsComponent } from './components/scraper-results/scraper-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CronFormComponent, ScraperResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Frontend';
}
