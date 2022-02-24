import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/models/frontend';
import { NotificationService } from '@app/services';
import { regex, regexErrors } from '@app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  isInline: boolean;
  regexErrors = regexErrors;
  showSpinner = false;
  items: ControlItem[];

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.isInline = true;

    this.items = [
      { label: 'First', value: 1 },
      { label: 'Second', value: 2 },
      { label: 'Third', value: 3 },
      { label: 'Fourth', value: 4 },
      { label: 'Fifth', value: 5 },
    ];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.email),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
      select: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      checkboxes: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      radios: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      datepicker: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      daterange: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      autocomplete: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    });
  }

  onPatchValue() {
    this.form.patchValue({
      input: 'test',
      password: 'qwerty',
      autocomplete: 1,
      select: 2,
      checkboxes: [3, 2],
      radios: 4,
      datepicker: new Date().getTime(),
      daterange: {
        from: new Date(2022, 1, 1).getTime(),
        to: new Date(2022, 1, 10).getTime(),
      },
    });
  }

  onToggleInline() {
    this.isInline = !this.isInline;
  }

  onToggleDisabled() {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onToggleSpinner() {
    this.showSpinner = !this.showSpinner;
  }

  onSucess() {
    this.notificationService.sucess('Everything is fine!');
  }

  onError() {
    this.notificationService.error('Oops! Something is wrong!');
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
}
