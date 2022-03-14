import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @Input() label: string;
  @Input() required: boolean;
  @Input() isInline: string;
  @Input() patternError: string;
  @Input() control: AbstractControl;

  get errorKey() {
    return (
      this.control && this.control.errors && Object.keys(this.control.errors)[0]
    );
  }

  hasError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }
}
