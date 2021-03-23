import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeTaskComponent } from './home-task/home-task.component';
import { from } from 'rxjs';
import { HelloComponent } from './hello/hello.component';
import { FormComponent } from './hello/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReverseTextPipe } from './reverse-text.pipe';
import { LettersDigitsDirective } from './letters-digits.directive';
import { BacColorDirective } from './home-task/bac-color.directive';
import { TextColorDirective } from './home-task/text-color.directive';
import { FormUserComponent } from './home-task/form-user/form-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeTaskComponent,
    HelloComponent,
    FormComponent,
    ReverseTextPipe,
    LettersDigitsDirective,
    BacColorDirective,
    TextColorDirective,
    FormUserComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
