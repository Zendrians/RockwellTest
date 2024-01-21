import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  logger(data: string) {
    console.log(`You called the service with ${data}`);
  }

  async postCronScrapJob(webUrl: string, cronExp: string) {
    console.log(webUrl, cronExp);
    const request = this.http
      .post<{ message: string }>('http://localhost:5000/api/v1/scrap/cron', {
        url: webUrl,
        cronExpression: cronExp,
      })
      .pipe(take(1));

    return await lastValueFrom<{ message: string }>(request);
  }

  postScrap() {}
}
