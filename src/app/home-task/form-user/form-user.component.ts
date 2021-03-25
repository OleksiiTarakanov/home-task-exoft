import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { User } from 'src/app/user';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  user: User = {
    username: 'Ol',
    firstName: 'Oleksii',
    lastName: 'Tarakanov',
    email: '123@gmail.com',
    password: '12345678',
    confirmPassword: '12345678',
    status: ':)'
  };
  userForm: FormGroup;

  private readonly passwordRegex: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: this.fb.control(this.user.username, Validators.required),
      firstName: this.fb.control(this.user.firstName, Validators.required),
      lastName: this.fb.control(this.user.lastName, Validators.required),
      email: this.fb.control(this.user.email, Validators.required),
      password: this.fb.control(this.user.password, [Validators.required, this.passValidator.bind(this)]),
      confirmPassword: this.fb.control(this.user.confirmPassword, Validators.required),
      status: this.fb.control(this.user.status)
    }, { validators: this.confPassValidator })
  }

  submit(): void {
    if (this.userForm.valid) {
      this.user = { ...this.user, ...this.userForm.value }
      alert(
        `Hello, ${this.user.firstName, this.user.lastName}
         Username: ${this.user.username}
         Password: ${this.user.password}
         email: ${this.user.email}
         status: ${this.user.status}`
      )
      console.log(this.userForm)
    } else {
      alert('Form not valid')
    }
  }

  private passValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = this.passwordRegex.test(control.value);
      return !isValid ? { invalidPassword: true } : null;
    }

    return null;
  }

  private confPassValidator(group: FormGroup) {
    const pass = group.get('password').value;
    const confPass = group.get('confirmPassword').value;
    return pass === confPass ? null : { notSame: true }
  }
}
