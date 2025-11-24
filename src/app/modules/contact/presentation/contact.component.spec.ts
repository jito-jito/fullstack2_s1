import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { provideRouter } from '@angular/router';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.form.get('name')?.value).toBe('');
    expect(component.form.get('alias')?.value).toBe('');
    expect(component.form.get('email')?.value).toBe('');
    expect(component.form.get('birthdate')?.value).toBe('');
    expect(component.form.get('password')?.value).toBe('');
    expect(component.form.get('confirmPassword')?.value).toBe('');
    expect(component.form.get('address')?.value).toBe('');
  });

  it('should validate name field correctly', () => {
    const nameControl = component.form.get('name');
    nameControl?.setValue('');
    expect(nameControl?.hasError('invalidName')).toBeTruthy();
  });

  it('should validate alias field correctly', () => {
    const aliasControl = component.form.get('alias');
    aliasControl?.setValue('');
    expect(aliasControl?.hasError('invalidAlias')).toBeTruthy();
  });

  it('should validate email field correctly', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('invalidEmail')).toBeTruthy();
  });

  it('should validate birthdate field correctly', () => {
    const birthdateControl = component.form.get('birthdate');
    birthdateControl?.setValue('');
    expect(birthdateControl?.hasError('invalidBirthdate')).toBeTruthy();
  });

  it('should validate password field correctly', () => {
    const passwordControl = component.form.get('password');
    passwordControl?.setValue('');
    expect(passwordControl?.hasError('invalidPassword')).toBeTruthy();
  });

  it('should validate passwords match', () => {
    component.form.get('password')?.setValue('Password123!');
    component.form.get('confirmPassword')?.setValue('Password123!');
    expect(component.form.hasError('passwordsDoNotMatch')).toBeFalsy();
  });

  it('should invalidate when passwords do not match', () => {
    component.form.get('password')?.setValue('Password123!');
    component.form.get('confirmPassword')?.setValue('DifferentPass123!');
    expect(component.form.hasError('passwordsDoNotMatch')).toBeTruthy();
  });

  it('should reset form', () => {
    component.form.get('name')?.setValue('John Doe');
    component.form.get('email')?.setValue('john@example.com');
    component.resetForm();
    expect(component.form.get('name')?.value).toBeNull();
    expect(component.form.get('email')?.value).toBeNull();
  });

  it('should mark all fields as touched when form is invalid on submit', () => {
    spyOn(component.form, 'markAllAsTouched');
    component.sendForm();
    expect(component.form.markAllAsTouched).toHaveBeenCalled();
  });
  
  it('should not submit form when invalid', () => {
    spyOn(console, 'log');
    component.sendForm();
    expect(console.log).toHaveBeenCalledWith('El formulario tiene errores. Por favor, revísalo antes de enviar.');
  });
});