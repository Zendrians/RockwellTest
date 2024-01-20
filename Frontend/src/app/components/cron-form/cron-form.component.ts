import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

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

  onSubmit() {
    console.log(this.scrapFormGroup.value);
    if (this.scrapFormGroup.valid) {
      console.log('Ready to submit');
    } else {
      console.log('Invalid');
    }
  }
}
