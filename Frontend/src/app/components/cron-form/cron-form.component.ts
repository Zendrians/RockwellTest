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
    webUrl: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(urlRegex),
    ]),
    cronExp: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(cronRegex),
    ]),
  });

  async onSubmit() {
    if (this.scrapFormGroup.valid) {
      try {
        const formValue = this.scrapFormGroup.value;
        if (!formValue.webUrl || !formValue.cronExp) return;
        const res = await this.clientService.postCronScrapJob(
          formValue.webUrl,
          formValue.cronExp
        );
        this.message = res.message;
      } catch {
        this.message = 'Something went wrong';
      }
    } else {
      this.message = 'Invalid fields';
    }
  }
}
