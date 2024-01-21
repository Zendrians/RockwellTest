import { Component, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { IScrappedData } from '../../types/scrapperTypes';

@Component({
  selector: 'app-scraper-results',
  standalone: true,
  imports: [],
  templateUrl: './scraper-results.component.html',
  styleUrl: './scraper-results.component.css',
})
export class ScraperResultsComponent {
  private clientService = inject(ClientService);
  scrappedData: IScrappedData | null = null;

  async getLatestScrap() {
    try {
      const response = await this.clientService.getScrapedData();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
}
