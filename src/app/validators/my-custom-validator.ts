import { AbstractControl, ValidationErrors } from "@angular/forms";

export function myCustomValidator(control: AbstractControl): ValidationErrors | null {

  const hasError = control.value ? (control.value as string).startsWith("abc") : false;

  return hasError ? { myCustomValidator: true } : null;
}
