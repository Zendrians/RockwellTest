import { Component, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { cronRegex, urlRegex } from '../../utils/regex';

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
