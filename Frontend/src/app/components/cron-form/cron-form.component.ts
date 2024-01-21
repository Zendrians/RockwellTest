import { Component, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

// Move this to utlis
const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
var cronRegex = new RegExp(
  /^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-3])|\*\/([0-9]|1[0-9]|2[0-3])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/
);

@Component({
  selector: 'app-cron-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cron-form.component.html',
  styleUrl: './cron-form.component.css',
})
export class CronFormComponent {
  private clientService = inject(ClientService);
  message: string | null = null;
  scrapFormGroup = new FormGroup({
    webUrl: new FormControl(null, [
      Validators.required,
      Validators.pattern(urlRegex),
    ]),
    cronExp: new FormControl(null, [
      Validators.required,
      Validators.pattern(cronRegex),
    ]),
  });

  async onSubmit() {
    if (this.scrapFormGroup.valid) {
      const res = await this.clientService.postCronScrapJob(
        this.scrapFormGroup.value.webUrl ?? '',
        this.scrapFormGroup.value.cronExp ?? ''
      );
      this.message = res.message;
    } else {
      console.log('Invalid');
    }
  }
}
