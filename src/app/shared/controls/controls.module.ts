import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RadiosModule } from './radios/radios.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { FormFieldModule } from './form-field/form-field.module';
import { InputModule } from './input/input.module';
import { PasswordModule } from './password/password.module';
import { SelectModule } from './select/select.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
  ],
  exports: [
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
  ],
})
export class ControlsModule {}
