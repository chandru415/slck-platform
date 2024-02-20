import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isNullOrUndefined } from '@slck/utils';

/**
 * validates the abstract control that have empty white space(s)
 * @param control is type of 'AbstractControl'
 * @returns ValidationErrors if logic satisfies else null
 */
export const whitespace: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return !isNullOrUndefined(control) && !isNullOrUndefined(control?.value)
    ? (control.value || '').toString().trim().length <= 0
      ? { whitespace: true }
      : null
    : null;
};
