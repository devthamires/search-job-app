import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export interface Value {
  from: number;
  to: number;
}

export interface Placeholder {
  from: string;
  to: string;
}

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true,
    },
  ],
})
export class DateRangeComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: Placeholder;
  @Output() changed = new EventEmitter<Value>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  get min(): Date {
    const { value } = this.form.controls.from;
    return value ? new Date(value) : null;
  }

  get max(): Date {
    const { value } = this.form.controls.to;
    return value ? new Date(value) : null;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      from: [null],
      to: [null],
    });
  }

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: Value): void {
    this.form.patchValue(value || {});
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onChanged() {
    const value = { ...this.form.value };

    this.propagateChange(value);
    this.changed.emit(value);
  }

  onClosed() {
    this.propagateTouched();
  }
}
