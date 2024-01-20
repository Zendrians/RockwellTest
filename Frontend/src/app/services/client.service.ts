import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  logger(data: string) {
    console.log(`You called the service with ${data}`);
  }
}
