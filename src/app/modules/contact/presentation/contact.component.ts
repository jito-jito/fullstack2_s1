import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ContactForm, isValidAlias, isValidBirthdate, isValidEmail, isValidName, isValidPassword } from '../domain/contact.domain';

export type TypedForm<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};

// Llamamos a la lógica del dominio en validadores personalizados
export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valido = isValidName(control.value);
    
    return valido ? null : { invalidName: true };
  };
}

export function aliasValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valido = isValidAlias(control.value);
    
    return valido ? null : { invalidAlias: true };
  }
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = isValidEmail(control.value);
    
    return isValid ? null : { invalidEmail: true };
  }
}

export function birthdateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = isValidBirthdate(control.value);
    
    return isValid ? null : { invalidBirthdate: true };
  }
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = isValidPassword(control.value);
    
    return isValid ? null : { invalidPassword: true };
  }
}

export function doPasswordsMatchValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    const isValid = password === confirmPassword;

    return isValid ? null : { passwordsDoNotMatch: true };
  }
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,

})
export class ContactComponent {
  fb = inject(FormBuilder)
  form: FormGroup<TypedForm<ContactForm>>
  isLoading = false;

  constructor() {
    this.form = this.fb.group<TypedForm<ContactForm>>({
      name: this.fb.control('', [nameValidator()]),
      alias: this.fb.control('', [aliasValidator()]),
      email: this.fb.control('', [emailValidator()]),
      birthdate: this.fb.control('', [birthdateValidator()]),
      password: this.fb.control('', [passwordValidator()]),
      confirmPassword: this.fb.control(''),
      address: this.fb.control(''),
    }, {
      validators: [doPasswordsMatchValidator()]
    })
  }

  resetForm(): void {
    this.form.reset();
  }

  sendForm(): void {
    if (this.form.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        alert('Formulario enviado con éxito!');
      }, 2000);
    } else {
      console.log('El formulario tiene errores. Por favor, revísalo antes de enviar.');
      this.form.markAllAsTouched();
    }
  }
}