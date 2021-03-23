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

  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: this.fb.control(this.user.username, Validators.required),
      firstName: this.fb.control(this.user.firstName, Validators.required),
      lastName: this.fb.control(this.user.lastName, Validators.required),
      email: this.fb.control(this.user.email, Validators.required),
      password: this.fb.control(this.user.password, Validators.required),
      confirmPassword: this.fb.control(this.user.confirmPassword, Validators.required),
      status: this.fb.control(this.user.status)
    })
  }

  submit(): void {
    if (this.userForm.valid){
      alert(`Hello, ${this.user.firstName}`)
      console.log(this.userForm)
    } else {
      alert('Form not valid')
    }
  }

  private confPassValidator() {
    if(this.user.confirmPassword === this.user.password){
      return true
    } else {
      return null
    }
  }
}
