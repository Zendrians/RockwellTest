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

  showData() {
    if (!this.scrappedData) return '';
    return JSON.stringify(this.scrappedData.data);
  }

  async getLatestScrap() {
    try {
      const response = await this.clientService.getScrapedData();
      this.scrappedData = response;
    } catch (err) {
      console.error(err);
    }
  }
}
