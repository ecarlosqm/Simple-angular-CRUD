import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, NgModel, ValidatorFn, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appSamePassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: SamePasswordDirective, multi: true}]
})
export class SamePasswordDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors {
    return this.field ? this.vlidator(this.field)(control):null;
  }

  @Input('appSamePassword') field: string;

  vlidator(valueToCompare: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const equals = valueToCompare == control.value;
      return equals ?  null : {'passwordIsNotTheSame': {value: control.value}};
    };
  }

}
